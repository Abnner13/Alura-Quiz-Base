import db from '../db.json'
import Head from 'next/head'
import styled from 'styled-components' 
import { useRouter } from 'next/router'
import Widget from '../source/components/Widget'
import Footer from '../source/components/Footer'
import QuizLogo from '../source/components/QuizLogo'
// import InputName from '../source/components/InputName'
import Input from '../source/components/Input'
import PlayButton from '../source/components/PlayButton'
import GitHubCorner from '../source/components/GitHubCorner'
import QuizBackground from '../source/components/QuizBackground'
import QuizContainer from '../source/components/QuizContainer'




export const Wrapper = styled.div`
  border-radius:  ${({ theme }) => theme.borderRadius};
  background:     ${({ theme }) => theme.colors.third};
  padding-top: 8px;

  width: 17em;
  height: 2.3em;
  margin-bottom: 1em;
  text-align: center;
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
      <QuizLogo/>
        <Widget>
          <Widget.Header>
            <h1>#RhynoQuiz</h1>
          </Widget.Header>
          <Widget.Content>
            <form onSubmit={function (e) {
              e.preventDefault()
              router.push(`Quiz?name=${name}`)
              console.log("Teste Abnner davi")
            }}>
              <Input
                placeholder="Diz seu nome..."
                onChange={(e) => setName(e.target.value)}
                name="NomeDoUsuario"
                maxLength="20"
                value={name}
              />
              <PlayButton type="submit" disabled={!name}>
                Jogar {name}
              </PlayButton>
            </form>
          </Widget.Content>
        </Widget>

        <Widget>
        <Widget.Content>
            <p>Quizes da Galera</p>
            <Wrapper>
              Abnner13/Alura-Quiz-Base
            </Wrapper>
            <Wrapper>
              Alura-challenges/aluraquiz-base
            </Wrapper>
          </Widget.Content>
        </Widget>
        <Footer/>
      </QuizContainer>
      <GitHubCorner/>
    </QuizBackground>
  )
}
