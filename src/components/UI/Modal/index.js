import React, { Fragment } from "react"
import Backdrop from "../Backdrop"

import "./styles.sass"

export default ({ isOpen, children, toggleHandler }) => isOpen && (
    <Fragment>
        <Backdrop isOpen={isOpen} onClick={toggleHandler} />
        <div className="modal">{children}</div>
    </Fragment>
)