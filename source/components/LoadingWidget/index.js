import React from 'react';
import Widget from '../Widget';
import Lottie from 'react-lottie';
import loadingWidget from '../../../Lotties/loadingAnimation.json'

export default function LoadingWidget() {
    const [animationState, setAnimationState] = React.useState({ isStopped: false, isPaused: false });
    const defaultOptions = {
        loop: false,
        autoplay: true,
        animationData: loadingWidget,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };
    return (
        <Widget>
            <Widget.Header>
                Carregando...
            </Widget.Header>

            <Widget.Content>
                <div>
                    <Lottie options={defaultOptions}
                        isStopped={animationState.isStopped}
                        isPaused={animationState.isPaused} />
                </div>
            </Widget.Content>
        </Widget>
    );
}
