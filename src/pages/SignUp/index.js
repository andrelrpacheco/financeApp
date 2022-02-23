import React, { useState, useContext } from 'react'
import { Platform, Keyboard, ActivityIndicator } from 'react-native'
import { AuthContext } from '../../contexts/authContext'

import {
	Background,
	Container,
	ContentInput,
	Input,
	SubmitButton,
	ButtonText,
} from '../SignIn/styles'

export default function SignIn() {
	const [nome, setNome] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const { signUp, loadingAuth } = useContext(AuthContext)

	const handleSignUp = () => {
		signUp(email, password, nome)
		Keyboard.dismiss()
	}

	return (
		<Background>
			<Container behavior={Platform.OS === 'ios' ? 'padding' : ''}>
				<ContentInput>
					<Input
						placeholder="Nome"
						autoCorrect={false}
						autoCapitalize="none"
						value={nome}
						onChangeText={text => setNome(text)}
					/>
				</ContentInput>

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
						secureTextEntry
						value={password}
						onChangeText={text => setPassword(text)}
					/>
				</ContentInput>

				<SubmitButton onPress={handleSignUp}>
					{loadingAuth ? (
						<ActivityIndicator size={22} color="#fff" />
					) : (
						<ButtonText>Cadastrar</ButtonText>
					)}
				</SubmitButton>
			</Container>
		</Background>
	)
}
