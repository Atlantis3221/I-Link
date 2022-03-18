import styled from 'styled-components'
import People from '../img/people.jpg'

const QuestionContainer = styled.div`
	width: 100%;
	margin-top: 20px;
	display: flex;
	align-items: flex-start;
	justify-content: center;
`
const ImageWrapper = styled.div`
	width: 200px;
	height: 200px;
	margin-right: 20px;
`
const TextWrapper = styled.div`
	padding: 10px;
	max-width: 300px;
	border: 2px solid black;
	border-radius: 6px;
`
const PersonImage = styled.img`
	height: 200px;
	width: 200px;
`

const QuestionSection: React.FC<{ text: string }> = ({ text }) => {
	return (
		<QuestionContainer>
			<ImageWrapper>
				<PersonImage src={People} />
			</ImageWrapper>
			<TextWrapper>{text}</TextWrapper>
		</QuestionContainer>
	)
}

export default QuestionSection
