import React, { useContext } from 'react'
import GameContext from '../../../context/GameContext'
import Img from '../../UI/Img'
import Logo from '../../UI/Logo'

import './styles.sass'

export default () => {

    const { points } = useContext(GameContext)
    
    return (
        <header>
            <div className="border-wrapper">
                <div className="flex-wrapper">
                    <Logo>
                        <Img name="logo" />
                    </Logo>
                    <div className="score">
                        <div className="text">score</div>
                        <div className="number">{points}</div>
                    </div>
                </div>
            </div>
        </header>
    )
}