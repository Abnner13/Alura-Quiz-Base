import React from 'react'
import db from '../db.json'
import Widget from '../source/components/Widget'
import QuizLogo from '../source/components/QuizLogo'
import QuizBackground from '../source/components/QuizBackground'
import QuizContainer from '../source/components/QuizContainer'
import Button from '../source/components/Button'
import Result from '../source/components/Result'


function LoadingWidget() {
    return (
        <Widget>
            <Widget.Header>
                Carregando...
      </Widget.Header>

            <Widget.Content>
                [Desafio do Loading]
      </Widget.Content>
        </Widget>
    );
}



function QuestionWidget({
    question,
    questionIndex,
    totalQuestions,
    onSubmit
}) {
    const questionId = `question__${questionIndex}`
    return (
        <Widget>
            <Widget.Header>
                <h3>
                    {`Pergunta ${questionIndex + 1} de ${totalQuestions}`}

                </h3>
            </Widget.Header>
            <img 
                alt="Descrição"
                style={{width: '100%', height: '150px', objectFit: 'cover',}}
                src={question.image}
            />
            <Widget.Content>

                <h2>{question.title}</h2>

                <p>{question.description}</p>

                <form onSubmit={(e) => {
                    e.preventDefault();
                    onSubmit();
                }}>
                    {question.alternatives.map((alternative, alternativeIndex) => {
                        const alternativeId = `alternative__${alternativeIndex}`
                        return (
                            <Widget.Topic 
                                as="label"
                                htmlFor={alternativeId}
                            >
                            <input 
                                // style={{display: 'none'}}
                                id={alternativeId} 
                                type="radio" 
                                name={questionId}/>
                            {alternative}
                            </Widget.Topic >
                        );
                    })}

                    <Button type="submit">Confirmar</Button>
                </form>
            </Widget.Content>
        </Widget>
    )
}

const screenStates = { 
    QUIZ: 'QUIZ',
    LOADING: 'LOADING',
    RESULT: 'RESULT'
}

export default function QuizPageAlura() {
    const [screenState, setScreenState] = React.useState(screenStates.LOADING);// Aqui é o primeiro estado do widget
    const [currentQuestion, setCurrentQuestion] = React.useState(0);
    const totalQuestions = db.questions.length;
    const questionIndex = currentQuestion;
    const question = db.questions[questionIndex];

    React.useEffect(() => {

        //seria a requisição ao back-end
        setTimeout(() => {
          setScreenState(screenStates.QUIZ) // Aqui mudamos o estado do Widget
        }, 1 * 1000) 
        
    }, [])

    function handleSubmitQuiz() {
        const nextQuestion = questionIndex + 1;
        if (nextQuestion < totalQuestions) {
            setCurrentQuestion(nextQuestion);
        } else {
            setScreenState(screenStates.RESULT);
        }
    }

    return( 
        <QuizBackground backgroundImage={db.bg}>
            <QuizContainer>
            <QuizLogo/>

                {screenState === screenStates.QUIZ && 
                (
                    <QuestionWidget 
                        question={question}
                        questionIndex={questionIndex}
                        totalQuestions={totalQuestions}
                        onSubmit={handleSubmitQuiz}
                    />
                )}

                {screenState === screenStates.LOADING && <LoadingWidget/>}

                {screenState === screenStates.RESULT && <Result />}
            </QuizContainer>
        </QuizBackground>
    )

    
}
