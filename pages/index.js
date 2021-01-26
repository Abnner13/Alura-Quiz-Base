import db from '../db.json'
import Head from 'next/head'
import styled from 'styled-components' 
import { useRouter } from 'next/router'
import Widget from '../source/components/Widget'
import Footer from '../source/components/Footer'
import QuizLogo from '../source/components/QuizLogo'
// import InputName from '../source/components/InputName'
import PlayButton from '../source/components/PlayButton'
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
export const InputName = styled.input`
  border-radius:  ${({ theme }) => theme.borderRadius};
  border-color:   ${({ theme }) => theme.colors.secondary};
  background:     ${({ theme }) => theme.colors.mainBg};
  color:          ${({ theme }) => theme.colors.contrastText};

  height: 3.3em;
  width: 20.2em;
  padding: 8px;
  margin-bottom: 2em;
  outline: none;
`;
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
              <InputName
                placeholder="Diz seu nome..."
                maxLength="20"
                onChange={(e) => setName(e.target.value)
              }/>
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
