import React from 'react'
import IconFeather from 'react-native-vector-icons/Feather'
import { Container, Type, IconView, TypeText, ValueText } from './styles'

export default function ListHistory({ data }) {
	return (
		<Container>
			<Type>
				<IconView type={data.tipo}>
					<IconFeather
						name={data.tipo === 'receita' ? 'arrow-up' : 'arrow-down'}
						color="#ffffff"
						size={22}
					/>
					<TypeText>{data.tipo}</TypeText>
				</IconView>
			</Type>

			<ValueText>R$ {data.valor}</ValueText>
		</Container>
	)
}
