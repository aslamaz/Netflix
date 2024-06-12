import React from 'react'
import { Route, Routes } from 'react-router-dom'
import GApp from './Guest/App'
import UAPP from './User/App'
import NBAPP from './NetflixBrowse/App'


const App = () => {
  return (
    <div>
      <Routes>

      <Route path="/*" element={<GApp />} />
      <Route path="/User/*" element={<UAPP />} />
      <Route path="/NetflixBrowse/*" element={<NBAPP />} />
      

      
      
      </Routes>
    
    </div>
  )
}

export default App