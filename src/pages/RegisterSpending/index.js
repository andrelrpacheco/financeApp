import React, { useState, useContext } from 'react'
import { SafeAreaView, Keyboard, TouchableWithoutFeedback, Alert } from 'react-native'
import PickerComponent from '../../components/Picker'
import Header from '../../components/Header'
import firebase from '../../services/FirebaseConnection'
import { useNavigation } from '@react-navigation/native'
import { Background, Input, SubmitButton, SubmitText } from './styles'
import { AuthContext } from '../../contexts/authContext'
import { format } from 'date-fns'

export default function RegisterSpending() {
	const navigation = useNavigation()

	const [dataValue, setDataValue] = useState('')
	const [dataType, setDataType] = useState(null)
	const { user } = useContext(AuthContext)

	function checkIncomeAndExpensesField() {
		Keyboard.dismiss()
		if(isNaN(parseFloat(dataValue)) || dataType === null) {
			alert('Preencha todos os campos!')
			return
		}

		Alert.alert(
			'Confirme seu dados',
			`Tipo: ${dataType} e Valor: R$${parseFloat(dataValue)}`,
			[
				{
					text: 'Cancelar',
					style: 'cancel'
				},
				{
					text: 'Continuar',
					onPress: () => handleSubmittingIncomeOrExpense()
				}
			]
		)
	}

	async function handleSubmittingIncomeOrExpense() {
		const uid = user.uid

		const key = await firebase.database().ref('history').child(uid).push().key
		await firebase.database().ref('history').child(uid).child(key).set({
			typeItem: dataType,
			valueItem: dataValue,
			date: format(new Date(), 'dd/MM/yy')
		})

		updatingBalance()
	}

	async function updatingBalance() {
		const uid = user.uid
		const balance = firebase.database().ref('users').child(uid)
		const responseBalance = await balance.once('value')

		let newBalance = parseFloat(responseBalance.val().saldo)
		dataType === 'despesa' ? newBalance -= parseFloat(dataValue) : newBalance += parseFloat(dataValue)

		balance.child('saldo').set(newBalance)

		Keyboard.dismiss()
		setDataValue('')
		setDataType(null)
		navigation.navigate('Home')
	}

	return (
		<TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
			<Background>
				<Header />
				<SafeAreaView style={{ alignItems: 'center' }}>
					<Input
						placeholder="Valor em reais"
						keyboardType="numeric"
						returnKeyType="next"
						onSubmitEditing={() => Keyboard.dismiss()}
						value={dataValue}
						onChangeText={text => setDataValue(text)}
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
