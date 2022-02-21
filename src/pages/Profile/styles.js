import styled from 'styled-components/native'

export const Container = styled.View`
	flex: 1;
	background: rgba(234, 234, 234, 0.8);
`
export const UserNameView = styled.View`
	align-items: flex-start;
	margin: 0 0 20px 10px;
	border-bottom-width: 1px;
	border-color: #d3d3d3;
`

export const UserName = styled.Text`
	font-size: 26px;
	color: #000000;
`
export const ButtonContainer = styled.View`
	align-items: center;
`

export const ButtonRegisterSpending = styled.TouchableOpacity`
	justify-content: center;
	align-items: center;
	background-color: #3b9054;
	width: 90%;
	height: 45px;
	border-radius: 8px;
	margin-top: 35px;
`

export const TextRegisterSpending = styled.Text`
	font-size: 16px;
	font-family: 'OpenSans-Bold';
	color: #ffffff;
	text-transform: uppercase;
`

export const ButtonLogout = styled.TouchableOpacity`
	margin: 5px 0 5px 0;
`

export const TextLogout = styled.Text`
	font-size: 18px;
	font-family: 'OpenSans-Bold';
	color: #ff0000;
`
