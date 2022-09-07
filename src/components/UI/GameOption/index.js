import React from 'react'
import Img from '../Img'
import Spinner from '../Spinner'

import "./style.sass"

export default ({ name, userChoice, won, className, caption, ...props }) => (
    <div className={`game-option ${name ? name : "empty"}${className ? " " + className : ""}`} {...props} >
        <div className={`option-icon${won ? " won" : ""}`}>
            <div className="shadow">
                { name ? <Img name={`icon-${name}`} /> : <Spinner /> }
            </div>
        </div>
        <div className="caption">{userChoice ? "you" : "the house" } picked</div>
    </div>
)