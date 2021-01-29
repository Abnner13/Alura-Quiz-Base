import React from 'react'
// import db from '../db.json'
import Confetti from "react-confetti"
import Button from '../../components/Button'
import Widget from '../../components/Widget'
import QuizLogo from '../../components/QuizLogo'
import LoadingWidget from '../../components/LoadingWidget'
import QuizContainer from '../../components/QuizContainer'
import QuizBackground from '../../components/QuizBackground'
import AlternativesForm from '../../components/AlternativeForm'
import BlackLinkArrow from '../../components/BlackLinkArrow'

function ResultWidget({ results }) {
    const width = window.innerWidth - 10;
    const height = window.innerHeight;
    const playerName = location.search.slice(6);
    return (
        <>
            <Confetti width={width} height={height} recycle={false} />
            <Widget>
                <Widget.Header>
                    {`${playerName}`}, Você acertou
                    {' '}
                    {results.filter((result) => result).length}
                    {' '}
                    Perguntas
                </Widget.Header>

                <Widget.Content>
                    <ul>
                        {
                            results.map((result, index) => {
                                return  <li key={`result___${result}`}>
                                                #{index + 1} {result ? 'Acertou': 'Errou'}
                                            </li>
                            })
                        }
                    </ul>
                </Widget.Content>
            </Widget>
        </>
    );
}



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
        <Widget>
            <Widget.Header>
                <BlackLinkArrow href='/'/>
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
                        const alternativeStatus  = isCorrect ? 'SUCCESS' : 'ERROR';
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
                                style={{display: 'none'}}
                                type="radio"
                                id={alternativeId} 
                                name={questionId}
                                onChange={() => setSelectedAlternative(alternativeIndex)}
                                />
                            {alternative}
                            </Widget.Topic >
                        );
                    })}

                    <Button type="submit" disabled={!hasAlternativeSelected}>Confirmar</Button>
                    {/* {isQuestionSubmited && isCorrect && <Success />}
                    {isQuestionSubmited && !isCorrect && <Error />} */}
                    {isQuestionSubmited && isCorrect && <p>Acertou</p>}
                    {isQuestionSubmited && !isCorrect && <p>Errour</p>}
                </AlternativesForm>
            </Widget.Content>
        </Widget>
    )
}

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
        // <QuizBackground backgroundImage={externalQuestions.bgs[questionIndex + 1]}>
        <QuizBackground backgroundImage={bg}>
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

function Success() {
    return (
        <div
            style={{ marginTop: '10px', display: 'flex', alignItems: 'center' }}
        >
            <div
                style={{
                    width: '30px',
                    height: '30px',
                    padding: '6px',
                    borderRadius: '50px',
                    backgroundColor: dbTheme.colors.success,
                    marginRight: '5px',
                }}
            >
                <i className="fas fa-check"></i>
            </div>
            <p>Parabéns, você acertou!</p>
        </div>
    );
}

function Error() {
    return (
        <div
            style={{ marginTop: '10px', display: 'flex', alignItems: 'center' }}
        >
            <div
                style={{
                    width: '30px',
                    height: '30px',
                    padding: '5px 8px',
                    borderRadius: '50px',
                    backgroundColor: dbTheme.colors.wrong,
                    marginRight: '5px',
                }}
            >
                <i className="fas fa-times"></i>
            </div>
            <p>Que pena, você errou!</p>
        </div>
    );
}
