import React from 'react'
import Lottie from 'react-lottie';
import animationData from '../../../Lotties/animation.json'

function Success() {
    const [animationState, setAnimationState] = React.useState({ isStopped: false, isPaused: false });
    const defaultOptions = {
        loop: false,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    return (
        <div
            style={{ marginTop: '10px', display: 'flex', alignItems: 'center' }}
        >
            <div>
                <Lottie options={defaultOptions}
                    height={40}
                    width={40}
                    isStopped={animationState.isStopped}
                    isPaused={animationState.isPaused} />
            </div>
            <p>Parabéns, você acertou!</p>
        </div>
    );
}
export default Success;
