import styled from 'styled-components'

const ButtonBlock = styled.div`
	margin-top: 40px;
	display: flex;
	justify-content: center;
	align-items: center;
`
const Button = styled.button`
	border: none;
	border-radius: 30px;
	padding: 20px 221px;
`

interface IProps {
	onCheck: () => void
}

const CheckButton: React.FC<IProps> = ({ onCheck }) => {
	return (
		<ButtonBlock>
			<Button onClick={onCheck}>Check</Button>
		</ButtonBlock>
	)
}

export default CheckButton
