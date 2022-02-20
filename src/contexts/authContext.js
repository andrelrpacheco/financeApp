/* eslint-disable react/jsx-no-constructed-context-values */
import React, { useState, createContext, useEffect } from 'react'
import { ToastAndroid } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import firebase from '../services/FirebaseConnection'

export const AuthContext = createContext({})

function AuthProvider({ children }) {
	const [user, setUser] = useState(null)
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		getStorageUser()
	}, [])

	const showToast = (text, time) => {
		ToastAndroid.show(text, time)
	}

	const getStorageUser = async () => {
		const getUser = await AsyncStorage.getItem('AUTH_USER')
		if (getUser) {
			setUser(JSON.parse(getUser))
			setLoading(false)
		}

		setLoading(false)
	}

	const storageUser = async data => {
		await AsyncStorage.setItem('AUTH_USER', JSON.stringify(data))
	}

	// Logando usuário
	const signIn = async (email, password) => {
		try {
			const responseLogged = await firebase
				.auth()
				.signInWithEmailAndPassword(email, password)
			const { uid } = responseLogged.user

			const snapshot = await firebase
				.database()
				.ref('users')
				.child(uid)
				.once('value')
			const data = {
				uid,
				nome: snapshot.val().nome,
				email: responseLogged.user.email,
			}

			setUser(data)
			showToast('Usuário logado com sucesso!', ToastAndroid.SHORT)
			storageUser(data)
		} catch (error) {
			showToast('Email ou senha inválido!', ToastAndroid.LONG)
		}
	}

	// Cadastrar usuário na base do firebase
	const signUp = async (email, password, nome) => {
		try {
			const responseAuth = await firebase
				.auth()
				.createUserWithEmailAndPassword(email, password)
			const { uid } = responseAuth.user

			await firebase.database().ref('users').child(uid).set({
				saldo: 0,
				nome,
			})

			const data = {
				uid,
				nome,
				email: responseAuth.user.email,
			}

			setUser(data)
			storageUser(data)
			showToast('Usuário criado com sucesso!', ToastAndroid.SHORT)
		} catch (error) {
			showToast('Verifique os dados e tente novamente!', ToastAndroid.LONG)
		}
	}

	const signOut = async () => {
		try {
			await firebase.auth().signOut()
			await AsyncStorage.clear()
			setUser(null)
			showToast('Você saiu da conta!', ToastAndroid.SHORT)
		} catch (error) {
			showToast(
				'Ops! Ocorreu um erro ao deslogar. Tente novamente!',
				ToastAndroid.LONG
			)
		}
	}

	return (
		<AuthContext.Provider
			value={{ isLogged: !!user, user, loading, signUp, signIn, signOut }}>
			{children}
		</AuthContext.Provider>
	)
}

export default AuthProvider
