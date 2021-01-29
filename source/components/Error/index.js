import React from 'react'
import Lottie from 'react-lottie';
import wrongAnimation from '../../../Lotties/wrongAnimation.json'

function Error() {
    const [animationState, setAnimationState] = React.useState({ isStopped: false, isPaused: false });
    const defaultOptions = {
        loop: false,
        autoplay: true,
        animationData: wrongAnimation,
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
            <p>Que pena, você errou!</p>
        </div>
    );
}

export default Error;
