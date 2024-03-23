import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Stages from './Pages/Stages.jsx'
import LearningDashboard from './Pages/LearningDashboard.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path='/roadmap'  element={<Stages />} />
        <Route path='/roadmap/learning'  element={<LearningDashboard />} />
        <Route path='/'  element={<App />} />
      </Routes>
    </Router>
  </React.StrictMode>,
)
