import React from 'react'
import Sidebar from '../Components/Sidebar'
import ArticlesContainer from '../Components/ArticlesContainer'

const Articles = () => {
  return (
    <div style={{display: 'flex'}}>
        <Sidebar />
        <ArticlesContainer />
    </div>
  )
}

export default Articles