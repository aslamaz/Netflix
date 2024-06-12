import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LandingPage from './LandingPage'
import './Guest.css'

import Head from './Head'


const App = () => {
    return (

        <div className='admin-mainG'>
            <div className='headG'>
                <Head />
            </div>
            <div className='adminHomeG'>
                <Routes>
                    <Route path="/" element={<LandingPage />} />
                </Routes>
            </div>
        </div>
    )
}

export default App