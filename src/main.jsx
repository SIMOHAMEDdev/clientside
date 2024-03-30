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
import ProtectedRoute from './services/ProtectedRoute.jsx'
import LoggedInRoute from './services/LoggedInRoute.jsx'
import Articles from './Pages/Articles.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route exact path='/'  element={<App />} />
        <Route exact path='/about' element={<About />} />
        <Route exact path='/goals' element={<Goals />} />
        <Route exact path='/FAQs' element={<FAQs />} />
        <Route exact path='/articles' element={<Articles />} />
        <Route path='/' element={<ProtectedRoute />}>
          <Route exact path='/roadmap'  element={<Stages />} />
          <Route exact path='/roadmap/learning/:level/:type/:lesson/:course'  element={<LearningDashboard />} />
        </Route>
        <Route path='/' element={<LoggedInRoute />}>
          <Route exact path='/login'  element={<Login />} />
          <Route exact path='/register'  element={<Register />} />
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>,
)
