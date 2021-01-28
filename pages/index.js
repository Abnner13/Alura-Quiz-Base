import db from '../db.json'
import Link from 'next/link'
import Head from 'next/head'
import styled from 'styled-components' 
import { useRouter } from 'next/router'
import Input from '../source/components/Input'
import Footer from '../source/components/Footer'
import Widget from '../source/components/Widget'
import Button from '../source/components/Button'
import QuizLogo from '../source/components/QuizLogo'
import GitHubCorner from '../source/components/GitHubCorner'
import QuizContainer from '../source/components/QuizContainer'
import QuizBackground from '../source/components/QuizBackground'




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
            <h1>#RhynoQuiz 🦏</h1>
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
              <Button type="submit" disabled={!name}>
                🦏 Jogar {name} 🦏
              </Button>
            </form>
          </Widget.Content>
        </Widget>

        <Widget>
        <Widget.Content>
            <p>Quizes da Galera</p>
            <Wrapper>
              <Link href="https://github.com/Abnner13/Alura-Quiz-Base">
                <a style={{ outline: '0', textDecoration: 'none', color: '#FFFFFF' }}>Abnner13/Alura-Quiz-Base</a>
              </Link>
            </Wrapper>
            <Wrapper>
              <Link href="https://github.com/Alura-challenges/aluraquiz-base">
                <a style={{ outline: '0', textDecoration: 'none', color: '#FFFFFF' }}>Alura-challenges/aluraquiz-base</a>
              </Link>
            </Wrapper>
          </Widget.Content>
        </Widget>
        <Footer/>
      </QuizContainer>
      <GitHubCorner/>
    </QuizBackground>
  )
}
