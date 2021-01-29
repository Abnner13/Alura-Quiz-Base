import Confetti from "react-confetti"
import Widget from "../Widget"
import BlackLinkArrow from '../BlackLinkArrow'


function ResultWidget(props) {
    const width = window.innerWidth - 10;
    const height = window.innerHeight;
    const playerName = location.search.slice(6);
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
                </Widget.Header>

                <Widget.Content>
                    <ul>
                        {
                            props.results.map((result, index) => {
                                return <li key={`result___${result}`}>
                                    #{index + 1} {result ? 'Acertou' : 'Errou'}
                                </li>
                            })
                        }
                    </ul>
                </Widget.Content>
            </Widget>
        </>
    );
}

export default ResultWidget;
