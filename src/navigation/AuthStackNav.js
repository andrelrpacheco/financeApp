import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import SignIn from '../pages/SignIn'
import SignUp from '../pages/SignUp'

const AuthStackNav = createStackNavigator()

function AuthStack() {
	return (
		<AuthStackNav.Navigator>
			<AuthStackNav.Screen
				name="SignIn"
				component={SignIn}
				options={{ headerShown: false }}
			/>

			<AuthStackNav.Screen
				name="SignUp"
				component={SignUp}
				options={{
					headerStyle: {
						borderBottomWidth: 1,
						borderBottomColor: '#cbcbcb',
					},
					headerBackTitleVisible: false,
					headerTitle: 'Voltar',
				}}
			/>
		</AuthStackNav.Navigator>
	)
}

export default AuthStack
