import 'react-native-gesture-handler'
import React, { useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import SplashScreen from 'react-native-splash-screen'
import AuthProvider from './src/contexts/authContext'
// import { View, Text } from 'react-native'
// import firebase from './src/services/FirebaseConnection'
import Routes from './src/navigation'

export default function App() {
	useEffect(() => {
		SplashScreen.hide()
	}, [])

	return (
		<NavigationContainer>
			<AuthProvider>
				<Routes />
			</AuthProvider>
		</NavigationContainer>
	)
}
