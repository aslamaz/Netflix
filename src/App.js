import React from 'react'
import { Route, Routes } from 'react-router-dom'
import GApp from './Guest/App'
import UAPP from './User/App'
import NBAPP from './NetflixBrowse/App'
import Player from './Player/App'


const App = () => {
  return (
    <div>
      <Routes>

      <Route path="/*" element={<GApp />} />
      <Route path="/User/*" element={<UAPP />} />
      <Route path="/NetflixBrowse/*" element={<NBAPP />} />
      <Route path="/Player/:id" element={<Player />} />
      

      
      
      </Routes>
    
    </div>
  )
}

export default App