import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import Home from '../pages/Home'
import Profile from '../pages/Profile'
import RegisterSpending from '../pages/RegisterSpending'

const Drawer = createDrawerNavigator()

function AppStack() {
	return (
		<Drawer.Navigator
			screenOptions={{
				drawerStyle: { backgroundColor: '#EAEAEA' },
				headerShown: false,
				drawerActiveTintColor: '#FFFFFF',
				drawerActiveBackgroundColor: '#40916c',
				drawerInactiveTintColor: '#000000',
				drawerLabelStyle: {
					fontSize: 18,
					fontFamily: 'Roboto-Regular',
				},
				drawerItemStyle: {
					marginVertical: 6,
					borderRadius: 8,
				},
			}}>
			<Drawer.Screen name="Home" component={Home} />
			<Drawer.Screen name="Perfil" component={Profile} />
			<Drawer.Screen name="Registrar-gastos" component={RegisterSpending} />
		</Drawer.Navigator>
	)
}

export default AppStack
