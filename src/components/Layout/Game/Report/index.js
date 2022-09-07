import React from 'react'
import Button from '../../../UI/Button'

import "./style.sass"

export default ({ result, replayHandler }) => (
    <div className="report">
        <span>you {result === 1 ? "win" : result ? "lose" : "draw"}</span>
        <Button onClick={replayHandler}>play again</Button>
    </div>
)