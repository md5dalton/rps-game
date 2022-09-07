import React from 'react'

export default ({ name, ...props }) => <img src={`/images/${name}.svg`} alt={name} {...props} />