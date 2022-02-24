import 'react-native-gesture-handler'
import React, { useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import SplashScreen from 'react-native-splash-screen'
import { StatusBar } from 'react-native'
import AuthProvider from './src/contexts/authContext'
import Routes from './src/navigation'

export default function App() {
	useEffect(() => {
		SplashScreen.hide()
	}, [])

	return (
		<NavigationContainer>
			<AuthProvider>
				<StatusBar backgroundColor="#000000" barStyle="light-content" />
				<Routes />
			</AuthProvider>
		</NavigationContainer>
	)
}
