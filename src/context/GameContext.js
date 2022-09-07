import React, { createContext, useState } from "react";

const GameContext = createContext()

export function GameProvider ({ children }) {

    const [points, setPoints] = useState(Number(localStorage.getItem("points")) || 0)

    const addPoint = point => {

        const newPoints = points + point

        setPoints(newPoints)
        
        localStorage.setItem("points", newPoints)

    }

    return (
        <GameContext.Provider value={{ points, addPoint }}>
            {children}
        </GameContext.Provider>
    )
} 

export default GameContext