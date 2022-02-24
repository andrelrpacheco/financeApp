import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import Home from '../pages/Home'
import Profile from '../pages/Profile'
import RegisterSpending from '../pages/RegisterSpending'
import CustomDrawer from '../components/CustomDrawer'

const Drawer = createDrawerNavigator()

function AppStack() {
	return (
		<Drawer.Navigator
			drawerContent={props => <CustomDrawer {...props} />}
			screenOptions={{
				drawerStyle: { backgroundColor: '#EAEAEA' },
				headerShown: false,
				drawerActiveTintColor: '#FFFFFF',
				drawerActiveBackgroundColor: '#64c0c7',
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
			<Drawer.Screen name="Meus dados" component={Profile} />
			<Drawer.Screen name="Meus gastos" component={RegisterSpending} />
		</Drawer.Navigator>
	)
}

export default AppStack
