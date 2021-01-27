import React from 'react'
import ItemResult from '../ItemResult'
import Widget from '../Widget'
import Button from '../Button'
import Confetti from "react-confetti"
import styled from 'styled-components'

function Result() {
    const width = window.innerWidth;
    const height = window.innerHeight;
    const nome = 'Abnner';
    const pontos = 100;
    return (
        <>
            <Confetti width={width} height={height} recycle={false} />
            <Widget>
                <Widget.Header>Resultado</Widget.Header>
                <Widget.Content>
                    <p> Mandou bem, {`${nome}`}</p>
                    <h1>Você fez {`${pontos}`} pontos, parabéns!</h1>
                    <BoxResult>
                        {/* Você chegou até o final! Mais ainda não conseguimos dizer se você é
                        bom o bastante. 😅 */}
                        <ItemResult>
                            icone
                            nomeJogador
                            100
                            Pontos
                        </ItemResult>
                        <ItemResult>
                            icone
                            nomeJogador
                            100
                            Pontos
                        </ItemResult>
                        <ItemResult>
                            icone
                            nomeJogador
                            100
                            Pontos
                        </ItemResult>
                        <ItemResult>
                            icone
                            nomeJogador
                            100
                            Pontos
                        </ItemResult>
                    </BoxResult>
                    <Button>Adicionar ao meu Projeto</Button>
                </Widget.Content>
            </Widget>
        </>
    )
}

const BoxResult = styled.div`
    border: 1px solid ${({ theme }) => theme.colors.primary};
    border-radius: ${({ theme }) => theme.borderRadius};
    padding: 8px;
    margin: 10px 0px;
    
`;



export default Result;
