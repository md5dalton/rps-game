import React from "react"
import { GameProvider } from "../../context/GameContext"
import Header from "./Header"

export default ({ children }) => (
    <GameProvider>
        <Header />
        <main>
            {children}
        </main>
    </GameProvider>
)