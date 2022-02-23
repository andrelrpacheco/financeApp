import React, { useContext, useState, useEffect } from 'react'
import { Alert } from 'react-native'
import moment from 'moment'
import Header from '../../components/Header'
import ListHistory from '../../components/ListHistory'
import firebase from '../../services/FirebaseConnection'
import { AuthContext } from '../../contexts/authContext'
import {
	Background,
	Container,
	UserName,
	Balance,
	Title,
	LastMoveList,
} from './styles'

export default function Home() {
	const [listItems, setListItems] = useState([])
	const [balance, setBalance] = useState(0)
	const { user } = useContext(AuthContext)

	useEffect(() => {
		getListIncomeAndExpense()
		getBalanceList()
	}, [])

	const getBalanceList = async () => {
		const uid = user && user.uid
		await firebase
			.database()
			.ref('users')
			.child(uid)
			.on('value', response => {
				setBalance(response.val().saldo)
			})
	}

	const getListIncomeAndExpense = async () => {
		const uid = user && user.uid
		await firebase
			.database()
			.ref('history')
			.child(uid)
			.limitToLast(10)
			.on('value', response => {
				setListItems([])

				response.forEach(childItem => {
					const data = {
						key: childItem.key,
						typeItem: childItem.val().typeItem,
						valueItem: childItem.val().valueItem,
						date: childItem.val().date,
					}

					setListItems(newListItem => [...newListItem, data])
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
			.child(user.uid)
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
					.child(user.uid)
					.child('saldo')
					.set(saldoAtual)
			})
			.catch(error => {
				console.log(error)
			})
	}

	return (
		<Background>
			<Header />
			<Container>
				<UserName>Olá, {user && user.nome}</UserName>
				<Balance>R$ {balance}</Balance>
			</Container>

			<Title>Ultimas movimentações</Title>

			<LastMoveList
				showsVerticalScrollIndicator={false}
				keyExtractor={item => item.key}
				data={listItems}
				renderItem={({ item }) => (
					<ListHistory data={item} deleteItem={handleDelete} />
				)}
			/>
		</Background>
	)
}
