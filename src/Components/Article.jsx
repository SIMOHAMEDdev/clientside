import React from 'react'
import ArticleOne from './articles/ArticleOne'
import ArticleTwo from './articles/ArticleTwo'
import ArticleFour from './articles/ArticleFour'
import ArticleThree from './articles/ArticleThree'
import Section from "../Section"

const Article = ({state}) => {
  return (
    <div className='article_container'>
      {state === 1 ? <Section><ArticleOne /></Section> : state === 2 ? <Section><ArticleTwo /></Section> : 
      state === 3 ? <Section><ArticleFour /></Section> : state === 4 ? <Section><ArticleThree /></Section> : null}
    </div>
  )
}

export default Article