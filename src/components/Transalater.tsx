import React from 'react'
import Header from './Header'
import QuestionSection from './QuestionSection'
import EnteredTranslation from './EnteredTranslation/EnteredTranslation'
import CheckButton from './CheckButton'
import { MainLayout } from './styled'
import { question } from './consts'

export interface IWord {
	word: string
	id: number
	order: number
}

const transformStringIntoArray = (str: string): IWord[] => {
	const arrStr = question.translation.split(' ')

	return arrStr.map((item, index) => ({ word: item, id: index, order: index }))
}

function Translater() {
	const [sentense, setSentense] = React.useState<IWord[]>([])
	const [translations, setTranslations] = React.useState<IWord[]>(transformStringIntoArray(question.translation))

	const onTranslationsClick = (word: IWord) => {
		setTranslations(perv => perv.filter(s => s !== word))
		setSentense(perv => [...perv, word])
	}

	const onSentenseClick = (word: IWord) => {
		setSentense(perv => perv.filter(s => s !== word))
		setTranslations(perv => [...perv, word])
	}

	const onCheck = () => {
		const joinedSentense = sentense.map(function (item) {
			return item.word
		})

		joinedSentense.join(' ') === question.translation ? alert('Правильно') : alert('Неправильно')
	}

	function handleOnDragEnd(result: any) {
		// TODO сделать порядок
		if (!result.destination) return

		if (result.destination.droppableId === 'translations') {
			const el = sentense[result.source.index]

			if (!el) return
			const newWords = sentense.filter((item, index) => index !== result.source.index)

			setSentense(newWords)
			setTranslations([...translations, el])
		}

		if (result.destination.droppableId === 'sentense') {
			const el = translations[result.source.index]

			if (!el) return

			const newTranslations = translations.filter((item, index) => index !== result.source.index)

			console.log(newTranslations)

			setSentense([...sentense, el])
			setTranslations(newTranslations)
		}
	}

	return (
		<MainLayout>
			<Header />
			<QuestionSection text={question.showText} />
			<EnteredTranslation
				translations={translations}
				sentense={sentense}
				onTranslationsClick={onTranslationsClick}
				onSentenseClick={onSentenseClick}
				handleOnDragEnd={handleOnDragEnd}
			/>
			<CheckButton onCheck={onCheck} />
		</MainLayout>
	)
}

export default Translater
