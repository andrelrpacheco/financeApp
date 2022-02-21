import styled from 'styled-components/native'

export const Background = styled.View`
	flex: 1;
	background-color: rgba(234, 234, 234, 0.8);
`

export const Container = styled.KeyboardAvoidingView`
	flex: 1;
	align-items: center;
	justify-content: center;
`

export const Logo = styled.Image`
	margin-bottom: 15px;
`

export const ContentInput = styled.View`
	flex-direction: row;
`

export const Input = styled.TextInput.attrs({
	placeholderTextColor: '#161616',
})`
	background: rgba(203, 203, 203, 0.5);
	width: 90%;
	color: #000000;
	font-size: 16px;
	margin-bottom: 12px;
	padding: 10px;
	border-radius: 8px;
`

export const SubmitButton = styled.TouchableOpacity`
	align-items: center;
	justify-content: center;
	width: 90%;
	height: 45px;
	background-color: #3b9054;
	border-radius: 8px;
	margin-top: 12px;
`

export const ButtonText = styled.Text`
	font-size: 18px;
	font-family: 'OpenSans-Bold';
	color: #f5f5f5;
	text-transform: uppercase;
`

export const ContentButton = styled.View`
	flex-direction: row;
	align-items: center;
	justify-content: center;
`

export const CreateAccountButton = styled.TouchableOpacity`
	margin-top: 12px;
	margin-bottom: 12px;
`

export const CreateAccountText = styled.Text`
	margin-left: 5px;
	color: #3b9054;
	font-size: 18px;
	font-family: 'OpenSans-Medium';
`

export const CreateAccountMessage = styled.Text`
	color: #000000;
	font-size: 15px;
	font-family: 'OpenSans-Regular';
`
