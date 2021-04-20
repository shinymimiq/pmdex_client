import React from 'react'
import './404Page.css'
import DEADLINK from '../Pages/deadlink.png'

const NotFoundPage = () => {
  return (
    <div className="page_not_found">
      you found a <p>DEAD LINK!</p>
    <img src={DEADLINK} alt=""/>
    </div>
  )
}

export default NotFoundPage
