import React, { useContext, useState, useEffect } from 'react'
import Header from '../../components/Header'
import ListHistory from '../../components/ListHistory'
import firebase from '../../services/FirebaseConnection'
import { AuthContext } from '../../contexts/authContext'
import {
	Background,
	Container,
	UserName,
	Balance,
	Title,
	LastMoveList,
} from './styles'

export default function Home() {
	const [listItems, setListItems] = useState([])
	const [balance, setBalance] = useState(0)
	const { user } = useContext(AuthContext)

	useEffect(() => {
		getListIncomeAndExpense()
		getBalanceList()
	}, [])

	const getBalanceList = async () => {
		const uid = user && user.uid
		await firebase
			.database()
			.ref('users')
			.child(uid)
			.on('value', response => {
				setBalance(response.val().saldo)
			})
	}

	const getListIncomeAndExpense = async () => {
		const uid = user && user.uid
		await firebase
			.database()
			.ref('history')
			.child(uid)
			.limitToLast(10)
			.on('value', response => {
				setListItems([])

				response.forEach(childItem => {
					const data = {
						key: childItem.key,
						typeItem: childItem.val().typeItem,
						valueItem: childItem.val().valueItem,
					}

					setListItems(newListItem => [...newListItem, data])
				})
			})
	}

	return (
		<Background>
			<Header />
			<Container>
				<UserName>Olá, {user && user.nome}</UserName>
				<Balance>
					R$ {balance.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')}
				</Balance>
			</Container>

			<Title>Ultimas movimentações</Title>

			<LastMoveList
				showsVerticalScrollIndicator={false}
				keyExtractor={item => item.key}
				data={listItems}
				renderItem={({ item }) => <ListHistory data={item} />}
			/>
		</Background>
	)
}
