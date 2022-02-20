import React, { useContext, useState } from 'react'
import { AuthContext } from '../../contexts/authContext'
import Header from '../../components/Header'
import ListHistory from '../../components/ListHistory'
import {
	Background,
	Container,
	UserName,
	Balance,
	Title,
	LastMoveList,
} from './styles'

export default function Home() {
	const [listItems, setListItems] = useState([
		{ key: '1', tipo: 'receita', valor: 1200 },
		{ key: '2', tipo: 'despesa', valor: 200 },
		{ key: '3', tipo: 'receita', valor: 100 },
		{ key: '4', tipo: 'receita', valor: 89.9 },
		{ key: '5', tipo: 'despesa', valor: 500 },
		{ key: '6', tipo: 'receita', valor: 1000 },
		{ key: '7', tipo: 'despesa', valor: 259.85 },
		{ key: '8', tipo: 'receita', valor: 689.6 },
	])
	const { user } = useContext(AuthContext)

	return (
		<Background>
			<Header />
			<Container>
				<UserName>{user && user.nome}</UserName>
				<Balance>R$ 250,00</Balance>
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
