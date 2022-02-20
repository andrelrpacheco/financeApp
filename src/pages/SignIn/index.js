import React, { useState, useContext } from 'react'
import { Keyboard } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { AuthContext } from '../../contexts/authContext'
import {
	Background,
	Container,
	Logo,
	ContentInput,
	Input,
	SubmitButton,
	ButtonText,
	CreateAccountButton,
	CreateAccountText,
	CreateAccountMessage,
	ContentButton,
} from './styles'

export default function SignIn() {
	const navigation = useNavigation()

	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const { signIn } = useContext(AuthContext)

	const handleLogin = () => {
		signIn(email, password)
		Keyboard.dismiss()
	}

	return (
		<Background>
			<Container>
				<Logo source={require('../../assets/image/Logo.png')} />

				<ContentInput>
					<Input
						placeholder="Email"
						autoCorrect={false}
						autoCapitalize="none"
						keyboardType="email-address"
						value={email}
						onChangeText={text => setEmail(text)}
					/>
				</ContentInput>

				<ContentInput>
					<Input
						placeholder="Senha"
						autoCorrect={false}
						autoCapitalize="none"
						value={password}
						onChangeText={text => setPassword(text)}
					/>
				</ContentInput>

				<SubmitButton onPress={handleLogin}>
					<ButtonText>Entrar</ButtonText>
				</SubmitButton>

				<ContentButton>
					<CreateAccountMessage>Ainda não tem conta?</CreateAccountMessage>
					<CreateAccountButton onPress={() => navigation.navigate('SignUp')}>
						<CreateAccountText>Criar conta</CreateAccountText>
					</CreateAccountButton>
				</ContentButton>
			</Container>
		</Background>
	)
}
