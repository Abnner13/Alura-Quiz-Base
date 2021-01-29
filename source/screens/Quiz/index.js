import React from 'react'
import ResultWidget from '../../components/Result'
import LoadingWidget from '../../components/LoadingWidget'
import QuizContainer from '../../components/QuizContainer'
import QuizBackground from '../../components/QuizBackground'
import QuestionWidget from '../../components/QuestionWidget'
import QuizLogo from '../../components/QuizLogo'

const screenStates = { 
    QUIZ: 'QUIZ',
    LOADING: 'LOADING',
    RESULT: 'RESULT'
}

export default function QuizPageAlura({ externalQuestions, bgExternal, dbTheme }) {
    const [screenState, setScreenState] = React.useState(screenStates.LOADING);// Aqui é o primeiro estado do widget
    const [currentQuestion, setCurrentQuestion] = React.useState(0);
    const [results, setResults] = React.useState([]);
    const totalQuestions = externalQuestions.length;
    const questionIndex = currentQuestion;
    const question = externalQuestions[questionIndex];
    const bg = bgExternal;

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
        <QuizBackground backgroundImage={bg}>
            <QuizContainer>
                <QuizLogo />
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

                {screenState === screenStates.LOADING && <LoadingWidget />}

                {screenState === screenStates.RESULT && <ResultWidget results={results} />}
            </QuizContainer>
        </QuizBackground>
    )
}

