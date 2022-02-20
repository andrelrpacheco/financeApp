import React, { useContext } from 'react'
import { useNavigation } from '@react-navigation/native'
import { AuthContext } from '../../contexts/authContext'
import Header from '../../components/Header'

import {
	Container,
	UserNameView,
	UserName,
	ButtonContainer,
	ButtonRegisterSpending,
	TextRegisterSpending,
	ButtonLogout,
	TextLogout,
} from './styles'

export default function Profile() {
	const navigation = useNavigation()
	const { user, signOut } = useContext(AuthContext)

	return (
		<Container>
			<Header />
			<UserNameView>
				<UserName>Olá, {user && user.nome}</UserName>
				<ButtonLogout onPress={() => signOut()}>
					<TextLogout>Sair</TextLogout>
				</ButtonLogout>
			</UserNameView>

			<ButtonContainer>
				<ButtonRegisterSpending
					onPress={() => navigation.navigate('Registrar-gastos')}>
					<TextRegisterSpending>Registrar gastos</TextRegisterSpending>
				</ButtonRegisterSpending>
			</ButtonContainer>
		</Container>
	)
}
