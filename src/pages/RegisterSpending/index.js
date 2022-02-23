import React, { useState, useContext } from 'react'
import {
	SafeAreaView,
	Keyboard,
	TouchableWithoutFeedback,
	Alert,
} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import moment from 'moment'
import PickerComponent from '../../components/Picker'
import Header from '../../components/Header'
import firebase from '../../services/FirebaseConnection'
import {
	Background,
	Input,
	SubmitButton,
	SubmitText,
	TitleRegister,
} from './styles'
import { AuthContext } from '../../contexts/authContext'

export default function RegisterSpending() {
	const navigation = useNavigation()

	const [dataValue, setDataValue] = useState('')
	const [dataType, setDataType] = useState(null)
	const { user } = useContext(AuthContext)

	function checkIncomeAndExpensesField() {
		Keyboard.dismiss()
		if (isNaN(parseFloat(dataValue)) || dataType === null) {
			Alert.alert('Preencha todos os campos!')
			return
		}

		Alert.alert(
			'Confirme seu dados',
			`${dataType} no valor de R$${parseFloat(dataValue)}`,
			[
				{
					text: 'Cancelar',
					style: 'cancel',
				},
				{
					text: 'Continuar',
					onPress: () => handleSubmittingIncomeOrExpense(),
				},
			]
		)
	}

	async function handleSubmittingIncomeOrExpense() {
		const { uid } = user
		const dateSend = new Date()

		const key = await firebase.database().ref('history').child(uid).push().key
		await firebase
			.database()
			.ref('history')
			.child(uid)
			.child(key)
			.set({
				typeItem: dataType,
				valueItem: dataValue,
				date: moment(dateSend, 'YYYY/MM/DD').format('DD/MM/YYYY'),
			})

		updatingBalance()
	}

	async function updatingBalance() {
		const { uid } = user
		const balance = firebase.database().ref('users').child(uid)
		const responseBalance = await balance.once('value')

		let newBalance = parseFloat(responseBalance.val().saldo)
		dataType === 'despesa'
			? (newBalance -= parseFloat(dataValue))
			: (newBalance += parseFloat(dataValue))

		balance.child('saldo').set(newBalance)

		Keyboard.dismiss()
		setDataValue('')
		setDataType(null)
		navigation.navigate('Home')
	}

	function textInputIsNumber(text) {
		if (!isNaN(text)) {
			setDataValue(text)
			return
		}
		setDataValue('')
	}

	return (
		<TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
			<Background>
				<Header />
				<SafeAreaView style={{ alignItems: 'center' }}>
					<TitleRegister>Registre receita ou despesa</TitleRegister>
					<Input
						placeholder="Valor em reais"
						returnKeyType="next"
						onSubmitEditing={() => Keyboard.dismiss()}
						value={dataValue}
						onChangeText={textInputIsNumber}
					/>

					<PickerComponent onChange={setDataType} type={dataType} />

					<SubmitButton onPress={checkIncomeAndExpensesField}>
						<SubmitText>Registrar</SubmitText>
					</SubmitButton>
				</SafeAreaView>
			</Background>
		</TouchableWithoutFeedback>
	)
}
