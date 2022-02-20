import 'react-native-gesture-handler'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import AuthProvider from './src/contexts/authContext'
// import { View, Text } from 'react-native'
// import firebase from './src/services/FirebaseConnection'
import Routes from './src/navigation'

export default function App() {
	return (
		<NavigationContainer>
			<AuthProvider>
				<Routes />
			</AuthProvider>
		</NavigationContainer>
	)
}
