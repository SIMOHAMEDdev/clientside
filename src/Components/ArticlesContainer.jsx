import React from 'react'
import ArticlesSide from './ArticlesSide'
import Article from './Article'

const ArticlesContainer = () => {
  return (
    <div className='articles_container'>
        <Article />
        <ArticlesSide />
    </div>
  )
}

export default ArticlesContainer