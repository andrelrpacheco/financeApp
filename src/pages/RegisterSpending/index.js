import React, { useState } from 'react'
import { SafeAreaView, Keyboard, TouchableWithoutFeedback } from 'react-native'
import Header from '../../components/Header'
import { Background, Input, SubmitButton, SubmitText } from './styles'
import PickerComponent from '../../components/Picker'

export default function RegisterSpending() {
	const [dataValue, setDataValue] = useState('')
	const [dataType, setDataType] = useState('Selecione o tipo')

	function handleSubmittingIncomeOrExpense() {}

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

					<SubmitButton onPress={handleSubmittingIncomeOrExpense}>
						<SubmitText>Registrar</SubmitText>
					</SubmitButton>
				</SafeAreaView>
			</Background>
		</TouchableWithoutFeedback>
	)
}
