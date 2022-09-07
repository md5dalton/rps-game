import React, { Fragment } from 'react'
import useGame from '../../../hooks/useGame'
import GameOption from '../../UI/GameOption'
import Report from './Report'

import "./style.sass"

export default () => {
    
    const { step, userChoiceHandler, replayHandler, userChoice, houseChoice, point } = useGame()

    return (
        <div className={`game step-${step}`}>
            {
                step === 4 ?
                    <Fragment>
                        <GameOption name={userChoice} won={point === 1} userChoice />
                        <Report result={point} replayHandler={replayHandler} />
                        <GameOption name={houseChoice} won={point === -1} />
                    </Fragment> :
                step === 3 ?
                    <Fragment>
                        <GameOption name={userChoice} userChoice />
                        <GameOption name={houseChoice} />
                    </Fragment> :
                step === 2 ?
                    <Fragment>
                        <GameOption name={userChoice} userChoice />
                        <GameOption />
                    </Fragment> :
                    <Fragment>
                        <GameOption name="paper" onClick={() => userChoiceHandler("paper")} />
                        <GameOption name="scissors" onClick={() => userChoiceHandler("scissors")} />
                        <GameOption name="rock" onClick={() => userChoiceHandler("rock")} />
                    </Fragment>
            }
        </div>
    )
}