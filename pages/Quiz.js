import React from 'react'
import db from '../db.json'
import QuizLogo from '../source/components/QuizLogo'
import ResultWidget from '../source/components/Result'
import LoadingWidget from '../source/components/LoadingWidget'
import QuizContainer from '../source/components/QuizContainer'
import QuizBackground from '../source/components/QuizBackground'
import QuestionWidget from '../source/components/QuestionWidget'

const screenStates = { 
    QUIZ: 'QUIZ',
    LOADING: 'LOADING',
    RESULT: 'RESULT'
}

export default function QuizPageAlura() {
    const [screenState, setScreenState] = React.useState(screenStates.LOADING);// Aqui é o primeiro estado do widget
    const [currentQuestion, setCurrentQuestion] = React.useState(0);
    const [results, setResults] = React.useState([]);
    const totalQuestions = db.questions.length;
    const questionIndex = currentQuestion;
    const question = db.questions[questionIndex];

    function addResult(result) {
        setResults([...results, result])
    }

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

    return ( 
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
                        addResult={addResult}
                    />
                )}

                {screenState === screenStates.LOADING && <LoadingWidget/>}

                {screenState === screenStates.RESULT && <ResultWidget results={results}/>}
            </QuizContainer>
        </QuizBackground>
    )    
}

