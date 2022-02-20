import React from 'react'
import { Picker } from '@react-native-picker/picker'
import { PickerView } from './styles'

export default function PickerComponent({ onChange, type }) {
	return (
		<PickerView>
			<Picker
				style={{
					with: '100%',
				}}
				selectedValue={type}
				onValueChange={itemValue => onChange(itemValue)}>
				<Picker.Item label="Receita" value="receita" />
				<Picker.Item label="Despesa" value="despesa" />
			</Picker>
		</PickerView>
	)
}
