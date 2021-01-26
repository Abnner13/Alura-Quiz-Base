import styled from 'styled-components'
import db from '../db.json'
import Head from 'next/head'
import { useRouter } from 'next/router'
import Widget from '../source/components/Widget'
import Footer from '../source/components/Footer'
import GitHubCorner from '../source/components/GitHubCorner'
import QuizBackground from '../source/components/QuizBackground'


export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;

export default function Home() {
  const router = useRouter()
  const [name, setName] = React.useState('')
  
  return (
    <QuizBackground backgroundImage={db.bg}>
      <Head>
        <title>RhynoQuiz - Alura</title>
      </Head>
      <QuizContainer>
        <Widget>
          <Widget.Header>
            <h1>Quiz da Unevale</h1>
          </Widget.Header>

          <Widget.Content>
            <form onSubmit={function (e) {
              e.preventDefault()
              router.push(`Quiz?name=${name}`)
              console.log("Teste Abnner davi")
            }}>
              <input placeholde="Nome..." onChange={function (e) {
                setName(e.target.value)
              }}/>
              <button type="submit" disabled={name.length === 0}>
                Jogar {name}
              </button>
            </form>
          </Widget.Content>
        </Widget>

        <Widget>
        <Widget.Content>
            <p>Meu Quiz</p>
            <p>Lorem Ipsum sit Amet...</p>
          </Widget.Content>
        </Widget>
        <Footer/>
      </QuizContainer>
      <GitHubCorner/>
    </QuizBackground>
  )
}
