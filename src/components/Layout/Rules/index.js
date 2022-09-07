import React, { useState } from 'react'
import Button from '../../UI/Button'
import Img from '../../UI/Img'
import Modal from '../../UI/Modal'

import "./style.sass"

export default () => {
    
    const [ isOpen, setIsOpen ] = useState(false)

    const toggleHandler = () => setIsOpen(!isOpen)

    return (
        <div className="rules">
            <div className="inner">
                <Modal isOpen={isOpen} toggleHandler={toggleHandler}>
                    <h1>rules</h1>
                    <Img name="image-rules" />
                    <Img name="icon-close" className="close-button" onClick={toggleHandler} />
                </Modal>
            </div>
            <div id="button-wrapper">
                <Button className="secondary" onClick={toggleHandler}>RULES</Button>
            </div>
        </div>
    )
}