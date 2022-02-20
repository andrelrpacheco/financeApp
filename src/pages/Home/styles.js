import styled from 'styled-components/native'

export const Background = styled.View`
	flex: 1;
	background-color: rgba(234, 234, 234, 0.8);
`

export const Container = styled.View`
	margin: 0 0 15px 15px;
`

export const UserName = styled.Text`
	font-size: 20px;
	color: #000000;
	font-family: 'Roboto-Medium';
`

export const Balance = styled.Text`
	margin: 5px 0 20px 0;
	font-size: 26px;
	font-family: 'Roboto-Bold';
`

export const Title = styled.Text`
	font-size: 16px;
	font-family: 'Roboto-Medium';
	margin: 0 0 8px 15px;
	color: #3b9054;
`
export const LastMoveList = styled.FlatList`
	padding-top: 15px;
	background-color: rgba(0, 0, 0, 0.07);
	border-top-left-radius: 15px;
	border-top-right-radius: 15px;
`
