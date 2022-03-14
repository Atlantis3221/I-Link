import React from 'react'
import {
	WordButton,
	TranslationContainer,
	TestContainer,
	AnswerString,
	AnswerDragedWrapper,
	AnswerDragedBlock,
	SuggestedWordsBlock,
	SuggestedWordsWrapper,
	AnswerBlock,
} from './styled'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
import { IWord } from '../Transalater'

interface IProps {
	sentense: IWord[]
	translations: IWord[]
	onTranslationsClick: (word: IWord) => void
	onSentenseClick: (word: IWord) => void
	handleOnDragEnd: (r: any) => void
}

const EnteredTranslation: React.FC<IProps> = ({
	translations,
	sentense,
	onTranslationsClick,
	onSentenseClick,
	handleOnDragEnd,
}) => {
	const renderTranslations = () => {
		return translations.map(function (item, index) {
			return (
				<Draggable key={item.id} draggableId={String(item.id)} index={index}>
					{provided => (
						<WordButton
							{...provided.draggableProps}
							{...provided.dragHandleProps}
							ref={provided.innerRef}
							onClick={() => {
								onTranslationsClick(item)
							}}
						>
							{item.word}
						</WordButton>
					)}
				</Draggable>
			)
		})
	}

	const renderSentense = () => {
		return sentense.map(function (item, index) {
			return (
				<Draggable key={item.id} draggableId={String(item.id)} index={index}>
					{provided => (
						<WordButton
							{...provided.draggableProps}
							{...provided.dragHandleProps}
							ref={provided.innerRef}
							onClick={() => {
								onSentenseClick(item)
							}}
						>
							{item.word}
						</WordButton>
					)}
				</Draggable>
			)
		})
	}

	return (
		<TranslationContainer>
			<TestContainer>
				<DragDropContext onDragEnd={handleOnDragEnd}>
					<Droppable droppableId="sentense">
						{provided => (
							<AnswerBlock>
								<AnswerString />
								<AnswerString />
								<AnswerDragedBlock>
									<AnswerDragedWrapper {...provided.droppableProps} ref={provided.innerRef}>
										{renderSentense()}
									</AnswerDragedWrapper>
									{provided.placeholder}
								</AnswerDragedBlock>
							</AnswerBlock>
						)}
					</Droppable>

					<Droppable droppableId="translations">
						{provided => (
							<SuggestedWordsBlock>
								<SuggestedWordsWrapper {...provided.droppableProps} ref={provided.innerRef}>
									{renderTranslations()}
								</SuggestedWordsWrapper>
								{provided.placeholder}
							</SuggestedWordsBlock>
						)}
					</Droppable>
				</DragDropContext>
			</TestContainer>
		</TranslationContainer>
	)
}

export default EnteredTranslation
