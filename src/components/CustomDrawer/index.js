import React, { useContext } from 'react'
import { View, Text, Image } from 'react-native'
import {
	DrawerContentScrollView,
	DrawerItemList,
	DrawerItem,
} from '@react-navigation/drawer'
import { AuthContext } from '../../contexts/authContext'

export default function CustomDrawer(props) {
	const { user, signOut } = useContext(AuthContext)
	return (
		<DrawerContentScrollView {...props}>
			<View
				style={{
					alignItems: 'center',
					justifyContent: 'center',
					marginTop: 25,
				}}>
				<Image
					source={require('../../assets/image/Logo.png')}
					style={{ width: 85, height: 85 }}
					resizeMode="contain"
				/>

				<Text style={{ color: '#000', fontSize: 18, marginTop: 5 }}>
					Bem vindo,
				</Text>
				<Text
					style={{
						color: '#000',
						fontSize: 16,
						fontWeight: 'bold',
						paddingBottom: 25,
					}}>
					{user && user.nome}
				</Text>
			</View>

			<DrawerItemList {...props} />
			<DrawerItem
				label="Sair"
				labelStyle={{
					fontSize: 20,
					fontWeight: 'bold',
					color: '#ff0000',
					marginTop: 20,
				}}
				onPress={() => signOut()}
				{...props}
			/>
		</DrawerContentScrollView>
	)
}
