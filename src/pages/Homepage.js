import React from "react"
import useFetch from "../hooks/useFetch"
import { Link } from "react-router-dom"

export default function Homepage() {
  const { loading, data, error } = useFetch(`http://localhost:1337/reviews`)

  if (loading) return <p>Loading...</p>
  if (error) return <p>ERROR</p>
  return (
    <div>
      {data.map((rev) => (
        <div key={rev.id} className='review-card'>
          <div className='rating'>{rev.rating}</div>
          <h2> {rev.title} </h2>

          <small> console list</small>
          <p> {rev.body.substring(0, 200)}... </p>
          <Link to={`/details/${rev.id}`}>Read More</Link>
        </div>
      ))}
    </div>
  )
}
