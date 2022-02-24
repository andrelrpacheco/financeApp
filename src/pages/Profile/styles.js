import styled from 'styled-components/native'

export const Container = styled.View`
	flex: 1;
	background: rgba(234, 234, 234, 0.8);
`
export const UserNameView = styled.View`
	flex-direction: row;
	align-items: center;
	margin-left: 15px;
`
export const UserEmailView = styled.View`
	flex-direction: row;
	align-items: center;
	border-bottom-width: 1px;
	border-color: #d3d3d3;
`

export const UserName = styled.Text`
	font-size: 20px;
	color: #000000;
	font-family: 'OpenSans-Regular';
`
export const ButtonContainer = styled.View`
	align-items: center;
`

export const ButtonRegisterSpending = styled.TouchableOpacity`
	justify-content: center;
	align-items: center;
	background-color: #64c0c7;
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

export const Label = styled.Text`
	font-size: 16px;
	font-family: 'OpenSans-Bold';
	color: #000;
`
