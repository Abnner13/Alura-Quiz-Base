import db from '../db.json'
import Link from '../source/components/Link'
import Head from 'next/head'
import styled from 'styled-components' 
import { motion } from 'framer-motion'
import { useRouter } from 'next/router'
import Input from '../source/components/Input'
import Footer from '../source/components/Footer'
import Widget from '../source/components/Widget'
import Button from '../source/components/Button'
import QuizLogo from '../source/components/QuizLogo'
import GitHubCorner from '../source/components/GitHubCorner'
import QuizContainer from '../source/components/QuizContainer'
import QuizBackground from '../source/components/QuizBackground'

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
        <Widget
         as={motion.section}
         transiton={{ delay: 0.5, duration: 0.5 }}
         variants={{
           show: { opacity: 1, y: '0'},
           hidden: { opacity: 0, y: '100%'},
         }}
         initial="hidden"
         animate="show"
        >
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

        <Widget
          as={motion.section}
          transiton={{ delay: 0.5, duration: 0.5 }}
          variants={{
            show: { opacity: 1, y: '0'},
            hidden: { opacity: 0, y: '100%'},
          }}
          initial="hidden"
          animate="show"
        >
        <Widget.Content>
            <p>Quizes da Galera</p>
            <ul>
              {db.external.map(( link ) => {
                const [projectName, githubUser] = link
                .replace(/\//g, '')
                .replace('https:', '')
                .replace('.vercel.app', '')
                .split('.');

                return (
                  <li key={link}>
                    <Widget.Topic 
                      as={Link}
                      href={`/quiz/${projectName}___${githubUser}`}
                    >
                       {`${githubUser}/${projectName}`} 
                    </Widget.Topic>
                  </li>
                )
              })}
            </ul>
          </Widget.Content>
        </Widget>
        <Footer
          as={motion.section}
          transiton={{ delay: 0.5, duration: 0.5 }}
          variants={{
            show: { opacity: 1, y: '0'},
            hidden: { opacity: 0, y: '100%'},
          }}
          initial="hidden"
          animate="show"
        />
      </QuizContainer>
      <GitHubCorner/>
    </QuizBackground>
  )
}
