import React from 'react'
import { motion } from 'framer-motion'
import Widget from '../Widget'
import Button from '../Button'
import BlackLinkArrow from '../BlackLinkArrow'
import AlternativesForm from '../AlternativeForm'
import Error from '../Error'
import Success from '../Success'

function QuestionWidget({
    question,
    questionIndex,
    totalQuestions,
    onSubmit,
    addResult
}) {
    const [selectedAlternative, setSelectedAlternative] = React.useState(undefined)
    const [isQuestionSubmited, setIsQuestionSubmited] = React.useState(undefined)
    const hasAlternativeSelected = selectedAlternative !== undefined;
    const isCorrect = selectedAlternative === question.answer;
    const questionId = `question__${questionIndex}`

    return (
        <Widget
            as={motion.section}
            transiton={{ delay: 0.5, duration: 0.5 }}
            variants={{
                show: { opacity: 1, y: '0' },
                hidden: { opacity: 0, y: '100%' },
            }}
            initial="hidden"
            animate="show"
        >
            <Widget.Header>
                <BlackLinkArrow href='/' />
                <h3>
                    {`Pergunta ${questionIndex + 1} de ${totalQuestions} `}
                </h3>
            </Widget.Header>
            <img
                alt="Descrição"
                style={{ width: '100%', height: '150px', objectFit: 'cover', }}
                src={question.image}
            />
            <Widget.Content>

                <h2>{question.title}</h2>

                <p>{question.description}</p>

                <AlternativesForm onSubmit={(e) => {
                    e.preventDefault();
                    setIsQuestionSubmited(true) // questao enviada
                    setTimeout(() => {
                        onSubmit();
                        addResult(isCorrect)
                        setIsQuestionSubmited(false) //setando pra false pra que a 
                        //proxima question nao fique com o estado anterior
                        setSelectedAlternative(undefined) // anulando a escolha da alternativa anterior
                    }, 3 * 1000)
                }}>
                    {question.alternatives.map((alternative, alternativeIndex) => {
                        const alternativeId = `alternative__${alternativeIndex}`;
                        const alternativeStatus = isCorrect ? 'SUCCESS' : 'ERROR';
                        const isSelected = selectedAlternative === alternativeIndex;

                        return (
                            <Widget.Topic
                                as="label"
                                key={alternativeId}
                                htmlFor={alternativeId}
                                data-selected={isSelected}
                                data-status={isQuestionSubmited && alternativeStatus}
                            >
                                <input
                                    style={{ display: 'none' }}
                                    type="radio"
                                    id={alternativeId}
                                    name={questionId}
                                    onClick={() => setSelectedAlternative(alternativeIndex)}
                                />
                                {alternative}
                            </Widget.Topic >
                        );
                    })}

                    <Button type="submit" disabled={!hasAlternativeSelected}>Confirmar</Button>
                    {isQuestionSubmited && isCorrect && <Success />}
                    {isQuestionSubmited && !isCorrect && <Error />}
                </AlternativesForm>

            </Widget.Content>
        </Widget>
    )
}

export default QuestionWidget;
