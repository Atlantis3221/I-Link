import styled from 'styled-components'

export const TranslationContainer = styled.div`
	height: 100%;
	display: flex;
	justify-content: center;
	margin-top: 20px;
	position: relative;
`

export const TestContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`

export const AnswerBlock = styled.div`
	border-top: 1px solid black;
	margin-bottom: 30px;
	max-width: 480px;
`
export const AnswerString = styled.div`
	height: 60px;
	border-bottom: 1px solid black;
	width: 480px;
`
export const AnswerDragedBlock = styled.div`
	position: absolute;
	top: 0;
`
export const AnswerDragedWrapper = styled.div`
	width: 480px;
	max-width: 480px;
	display: flex;
	justify-content: flex-start;
	flex-wrap: wrap;
`
export const WordBlock = styled.div`
	height: 60px;
	margin-left: 4px;
	margin-right: 4px;
	display: flex;
	flex-direction: column;
	justify-content: center;
`
export const WordButton = styled.div`
	border: 1px solid black;
	border-radius: 3px;
	padding: 12px 16px;
	font-size: 19px;
	background: white;
	margin: 4px 3px;
`

export const SuggestedWordsBlock = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
`

export const SuggestedWordsWrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	width: 100%;
	max-width: 480px;
`
