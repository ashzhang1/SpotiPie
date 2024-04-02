import { useState } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import HomePage from './pages/HomePage'
import VisualisationsPage from './pages/VisualisationsPage'

function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage/>}/>
          <Route path="/test" element={<VisualisationsPage />}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
