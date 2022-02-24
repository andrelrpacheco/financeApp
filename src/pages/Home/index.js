import React, { useContext, useState, useEffect } from 'react'
import { Alert, Platform, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import moment from 'moment'
import Header from '../../components/Header'
import DatePicker from '../../components/DatePicker'
import ListHistory from '../../components/ListHistory'
import firebase from '../../services/FirebaseConnection'
import { AuthContext } from '../../contexts/authContext'
import {
	Background,
	Container,
	UserName,
	Balance,
	ContentIcon,
	Title,
	LastMoveList,
} from './styles'

export default function Home() {
	const [listItems, setListItems] = useState([])
	const [balance, setBalance] = useState(0)
	const [newDate, setNewDate] = useState(new Date())
	const [showDatePicker, setShowDatePicker] = useState(false)

	const { user } = useContext(AuthContext)
	const uid = user && user.uid

	useEffect(() => {
		getListIncomeAndExpense()
		getBalanceList()
	}, [newDate])

	const getBalanceList = async () => {
		await firebase
			.database()
			.ref('users')
			.child(uid)
			.on('value', response => {
				setBalance(response.val().saldo)
			})
	}

	const getListIncomeAndExpense = async () => {
		await firebase
			.database()
			.ref('history')
			.child(uid)
			.orderByChild('date')
			.equalTo(moment(newDate, 'YYYY/MM/DD').format('DD/MM/YYYY'))
			.limitToLast(10)
			.on('value', response => {
				setListItems([])

				response.forEach(childItem => {
					const dataChild = {
						key: childItem.key,
						typeItem: childItem.val().typeItem,
						valueItem: childItem.val().valueItem,
						date: childItem.val().date,
					}

					setListItems(newListItem => [...newListItem, dataChild])
				})
			})
	}

	const handleDelete = data => {
		// Obtendo data do registro
		const dateRegister = data.date
		const dateItem = moment(dateRegister, 'DD/MM/YYYY').format('YYYY/MM/DD')

		// Obtendo data atual
		const currencyDay = new Date()
		const dateCurrency = moment(currencyDay, 'DD/MM/YYYY').format('YYYY/MM/DD')

		if (dateItem < dateCurrency) {
			// Se a data do registro já passou
			Alert.alert('Você não pode excluir um registro antigo!')
			return
		}

		Alert.alert(
			'Confirme as informações',
			`Você deseja deletar a ${data.typeItem} de valor R$${data.valueItem}?`,
			[
				{
					text: 'Cancelar',
					style: 'cancel',
				},
				{
					text: 'Deletar',
					onPress: () => handleDeleteSuccess(data),
				},
			]
		)
	}

	const handleDeleteSuccess = async data => {
		await firebase
			.database()
			.ref('history')
			.child(uid)
			.child(data.key)
			.remove()
			.then(async () => {
				let saldoAtual = balance
				data.typeItem === 'despesa'
					? (saldoAtual += parseFloat(data.valueItem))
					: (saldoAtual -= parseFloat(data.valueItem))

				await firebase
					.database()
					.ref('users')
					.child(uid)
					.child('saldo')
					.set(saldoAtual)
			})
			.catch(error => {
				console.log(error)
			})
	}

	const handleShowPicker = () => {
		setShowDatePicker(true)
	}

	const handleClose = () => {
		setShowDatePicker(false)
	}

	const onChangeDatePicker = date => {
		setShowDatePicker(Platform.OS === 'ios')
		setNewDate(date)
		console.log(date)
	}

	return (
		<Background>
			<Header />
			<Container>
				<UserName>Olá, {user && user.nome}</UserName>
				<Balance>R$ {balance.toFixed(2)}</Balance>
			</Container>

			<ContentIcon>
				<TouchableOpacity onPress={handleShowPicker}>
					<Icon name="event" color="#000" size={30} />
				</TouchableOpacity>
				<Title>Ultimas movimentações</Title>
			</ContentIcon>

			<LastMoveList
				showsVerticalScrollIndicator={false}
				keyExtractor={item => item.key}
				data={listItems}
				renderItem={({ item }) => (
					<ListHistory data={item} deleteItem={handleDelete} />
				)}
			/>

			{showDatePicker && (
				<DatePicker
					onClose={handleClose}
					date={newDate}
					onChange={onChangeDatePicker}
				/>
			)}
		</Background>
	)
}
