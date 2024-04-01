import { useState } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import HomePage from './pages/HomePage'
import TestRedirectPage from './pages/TestRedirectPage'

function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage/>}/>
          // <Route path="/test" element={<TestRedirectPage />}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
