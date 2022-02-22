import styled from 'styled-components'

export const Container = styled.View`
	margin-bottom: 8px;
	padding: 8px;
	margin: 5px;
	box-shadow: 2px 2px rgba(0, 0, 0, 0.02);
	background-color: #ffffff;
	border-radius: 8px;
`

export const Type = styled.View`
	flex-direction: row;
`

export const IconView = styled.View`
	flex-direction: row;
	background-color: ${props =>
		props.type === 'receita' ? '#64c0c7' : '#c62c36'};
	padding: 3px 5px;
	border-radius: 6px;
`

export const TypeText = styled.Text`
	color: #fff;
	font-size: 16px;
	font-family: 'OpenSans-Medium';
`

export const ValueText = styled.Text`
	color: #222;
	font-size: 22px;
	font-family: 'OpenSans-Bold';
`
