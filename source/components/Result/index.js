import Confetti from "react-confetti"
import Widget from "../Widget"
import BlackLinkArrow from '../BlackLinkArrow'
import styled from 'styled-components';

const correctColor = (props) => `${props.theme.colors.primary}40`;
const wrongColor = (props) => `${props.theme.colors.wrong}40`;

const DivLi = styled.li`
  outline: 0;
  cursor: pointer;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.contrastText};
  background-color: ${(props) => props.iscorrect ? correctColor : wrongColor};
  padding: 10px 15px;
  margin-bottom: 8px;
  border-radius: ${({ theme }) => theme.borderRadius};
  transition: .3s;
  display: block;
  
  &:hover,
  &:focus {
    opacity: .5;
  }
`;



function ResultWidget(props) {
    const width = window.innerWidth - 10;
    const height = window.innerHeight;
    const playerName = location.search.slice(6).replace('20', '').replace('%', ' ');
    // const [pointsPlayer, setPointsPlayer] = React.useState(0);
    
    // function CouterPoints(results) {
    //     results.map((result) => {
    //         if (result) {
    //             let x = pointsPlayer;
    //             setPointsPlayer(x+10);
    //         }
    //         else return;
    //     })
    // }
    // CouterPoints(props.results)
    return (
        <>
            <Confetti width={width} height={height} recycle={false} />
            <Widget>
                <Widget.Header>
                    <BlackLinkArrow href='/' />
                    {`${playerName || "Player"}`}, Você acertou
                    {' '}
                    {props.results.filter((result) => result).length}
                    {' '}
                    Perguntas
                    {/* Pontos: {pointsPlayer} */}
                </Widget.Header>

                <Widget.Content>
                    <ul>
                        {
                            props.results.map((result, index) => {
                                return <DivLi
                                            iscorrect={result}
                                            key={`result___${result}`}>
                                            #{index + 1} {result ? 'Acertou' : 'Errou'}
                                        </DivLi>
                            })
                        }
                    </ul>
                </Widget.Content>
            </Widget>
        </>
    );
}

export default ResultWidget;
