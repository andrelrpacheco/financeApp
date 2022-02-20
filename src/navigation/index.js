import React, { useContext } from 'react'
import { View, ActivityIndicator, StyleSheet } from 'react-native'
import { AuthContext } from '../contexts/authContext'
import AuthStackNav from './AuthStackNav'
import AppStackNav from './AppStackNav'

function Routes() {
	const { isLogged, loading } = useContext(AuthContext)

	if (loading) {
		return (
			<View style={styles.loadingView}>
				<ActivityIndicator size="large" color="#000000" />
			</View>
		)
	}

	return isLogged ? <AppStackNav /> : <AuthStackNav />
}

const styles = StyleSheet.create({
	loadingView: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
})

export default Routes
