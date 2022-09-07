import React from 'react'
import { createRoot } from 'react-dom/client'
import Game from './Layout/Game'

import "./App.sass"
import Layout from './Layout'
import Rules from './Layout/Rules'

const App = () => (
    <Layout>
        <Game />
        <Rules />
    </Layout>
)

const root = createRoot(document.getElementById('app'))
root.render(<App />)