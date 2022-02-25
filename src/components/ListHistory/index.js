import React from 'react'
import { TouchableWithoutFeedback } from 'react-native'
import IconFeather from 'react-native-vector-icons/Feather'
import { Container, Type, IconView, TypeText, ValueText } from './styles'

export default function ListHistory({ data, deleteItem }) {
	return (
		<TouchableWithoutFeedback onPress={() => deleteItem(data)}>
			<Container>
				<Type>
					<IconView type={data.typeItem}>
						<IconFeather
							name={data.typeItem === 'receita' ? 'arrow-up' : 'arrow-down'}
							color="#ffffff"
							size={18}
						/>
						<TypeText>{data.typeItem}</TypeText>
					</IconView>
				</Type>

				<ValueText>R$ {parseFloat(data.valueItem).toFixed(2)}</ValueText>
			</Container>
		</TouchableWithoutFeedback>
	)
}
