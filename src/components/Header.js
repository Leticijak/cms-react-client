import React from "react"
import { Link } from "react-router-dom"

export const Header = () => {
  return (
    <div className='site-header'>
      <Link to='/'>
        <h1>Nintendo Reviews</h1>
      </Link>
    </div>
  )
}
