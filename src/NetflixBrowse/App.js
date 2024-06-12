import React from 'react'
import NetflixHomePage from './NetflixHomePage'
import { Route, Routes } from 'react-router-dom'
import Head from './Head'
import './NetflixStyle.css'


const App = () => {
  return (
    <div className='admin-mainNB'>
            <div className='headNB'>
                <Head />
            </div>
            <div className='adminHomeNB'>
                <Routes>
                <Route path="/*" element={<NetflixHomePage/>} />
               
                </Routes>
            </div>
        </div>
  )
}

export default App
