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
	font-family: 'OpenSans-Bold';
`

export const Balance = styled.Text`
	margin: 20px 0 20px 0;
	font-size: 20px;
	font-family: 'OpenSans-Medium';
	color: #000000;
`

export const Title = styled.Text`
	font-size: 16px;
	font-family: 'OpenSans-Bold';
	margin: 0 0 8px 15px;
	color: #64c0c7;
`
export const LastMoveList = styled.FlatList`
	padding-top: 15px;
	background-color: rgba(0, 0, 0, 0.07);
	border-top-left-radius: 15px;
	border-top-right-radius: 15px;
`
