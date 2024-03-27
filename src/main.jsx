import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Stages from './Pages/Stages.jsx'
import LearningDashboard from './Pages/LearningDashboard.jsx'
import About from './Pages/About.jsx'
import Goals from './Pages/Goals.jsx'
import FAQs from './Pages/FAQs.jsx'
import Login from './Pages/Login.jsx'
import Register from './Pages/Register.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path='/roadmap'  element={<Stages />} />
        <Route path='/roadmap/learning/:type/:lesson'  element={<LearningDashboard />} />
        <Route path='/about' element={<About />} />
        <Route path='/goals' element={<Goals />} />
        <Route path='/FAQs' element={<FAQs />} />
        <Route path='/'  element={<App />} />
        <Route path='/login'  element={<Login />} />
        <Route path='/register'  element={<Register />} />
      </Routes>
    </Router>
  </React.StrictMode>,
)
