import React, { useContext } from 'react'
import { useNavigation } from '@react-navigation/native'
import { AuthContext } from '../../contexts/authContext'
import Header from '../../components/Header'

import {
	Container,
	UserNameView,
	UserEmailView,
	UserName,
	ButtonContainer,
	ButtonRegisterSpending,
	TextRegisterSpending,
	Label,
} from './styles'

export default function Profile() {
	const navigation = useNavigation()
	const { user } = useContext(AuthContext)

	return (
		<Container>
			<Header />
			<UserNameView>
				<Label>Nome: </Label>
				<UserName>{user && user.nome}</UserName>
			</UserNameView>

			<UserEmailView>
				<Label>E-mail: </Label>
				<UserName>{user && user.email}</UserName>
			</UserEmailView>

			<ButtonContainer>
				<ButtonRegisterSpending
					onPress={() => navigation.navigate('Meus gastos')}>
					<TextRegisterSpending>Registrar gastos</TextRegisterSpending>
				</ButtonRegisterSpending>
			</ButtonContainer>
		</Container>
	)
}
