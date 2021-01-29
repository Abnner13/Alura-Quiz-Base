import React from 'react';
import { ThemeProvider } from 'styled-components';
import QuizScreen from '../../source/screens/Quiz'

export default function QuizDaGalera({ dbExternal }) {
    return (
        <ThemeProvider theme={dbExternal.theme}>
            <QuizScreen
                externalQuestions={dbExternal.questions}
                bgExternal={dbExternal.bg}
                dbTheme={dbExternal.theme} />
        </ThemeProvider>
    )
}

export async function getServerSideProps(context) {
    try {
        const [projectName, githubUser] = context.query.id.split('___')

        const dbExternal = await fetch(`https://${projectName}.${githubUser}.vercel.app/api/db`)
        .then((resp) => {
            if(resp.ok){
                return resp.json()
            }
            throw new Error('Falha')
        })
        .then((respJSON) => respJSON)
        // .catch((e) => {
        //     console.error(e)
        // }) 

        // console.log(dbExternal)

        return {
            props: {
                dbExternal,
            },
        }
    } catch (error) {
        throw new Error ('error' + error)
    }
}
