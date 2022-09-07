import React from "react"

import "./styles.sass"

export default ({ isOpen, children, ...props }) => isOpen && (
    <div className="backdrop" {...props}>{children}</div>
)