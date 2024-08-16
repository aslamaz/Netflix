import React from 'react'
import { Route, Routes } from 'react-router-dom'
import './player.css'

import Player from './Player'


const App = () => {
    return (
            <div>
                <Routes>
                    <Route path="/*" element={<Player />} />
                </Routes>
            </div>
    )
}

export default App