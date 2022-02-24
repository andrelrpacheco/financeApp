import React, { useState } from 'react'
import { Platform, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Feather'
import DateTimePicker from '@react-native-community/datetimepicker'
import { Container, Header } from './styles'

export default function DatePicker({ onClose, date, onChange }) {
	const [dateNow, setDateNow] = useState(new Date(date))

	const onChangeDate = (event, d) => {
		const currentDate = d || dateNow
		setDateNow(currentDate)
		onChange(currentDate)
	}

	return (
		<Container>
			{Platform.OS === 'ios' && (
				<Header>
					<TouchableOpacity onPress={onClose}>
						<Icon name="close" color="#000" size={28} />
					</TouchableOpacity>
				</Header>
			)}
			<DateTimePicker
				value={dateNow}
				mode="date"
				display="default"
				onChange={onChangeDate}
				style={{ backgroundColor: '#fff' }}
			/>
		</Container>
	)
}
