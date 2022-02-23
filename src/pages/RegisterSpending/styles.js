import styled from 'styled-components/native'

export const Background = styled.SafeAreaView`
	flex: 1;
	background-color: rgba(234, 234, 234, 0.8);
`

export const Input = styled.TextInput.attrs({
	placeholderTextColor: '#161616',
})`
	width: 90%;
	height: 50px;
	background-color: rgba(203, 203, 203, 0.6);
	margin-top: 15px;
	padding: 10px;
	border-radius: 8px;
	font-size: 15px;
`
export const SubmitButton = styled.TouchableOpacity`
	width: 90%;
	height: 50px;
	margin-top: 20px;
	align-items: center;
	justify-content: center;
	background-color: #64c0c7;
	border-radius: 8px;
`
export const SubmitText = styled.Text`
	color: #f5f5f5;
	font-size: 18px;
	font-family: 'OpenSans-Bold';
	text-transform: uppercase;
`
export const TitleRegister = styled.Text`
	font-size: 18px;
	font-family: 'OpenSans-Medium';
	margin: 15px 0 20px 0;
	color: #000000;
`
