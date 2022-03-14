import styled from 'styled-components'

const HeaderContainer = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
`
const HeaderText = styled.h1`
	font-size: 17px;
	font-weight: normal;
`

const Header = () => {
	return (
		<HeaderContainer>
			<HeaderText>Translate this sentence</HeaderText>
		</HeaderContainer>
	)
}
export default Header
