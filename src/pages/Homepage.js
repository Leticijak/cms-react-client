import React from "react"
import { useQuery, gql } from "@apollo/client"
import { Link } from "react-router-dom"

const REVIEWS = gql`
  query GetReviews {
    reviews {
      title
      id
      rating
      body
      published_at
      categories {
        name
        id
      }
    }
  }
`

export default function Homepage() {
  const { loading, data, error } = useQuery(REVIEWS)
  console.log(data)

  if (loading) return <p>Loading...</p>
  if (error) return <p>ERROR</p>
  return (
    <div>
      {data.reviews.map((rev) => (
        <div key={rev.id} className='review-card'>
          <div className='rating'>{rev.rating}</div>
          <h2> {rev.title} </h2>

          <small>Date: {rev.published_at.slice(0, 10)}</small>
          <br />
          {rev.categories.map((cats) => (
            <small key={cats.id}> {cats.name}</small>
          ))}
          <p> {rev.body.substring(0, 200)}... </p>
          <Link to={`/details/${rev.id}`}>Read More</Link>
        </div>
      ))}
    </div>
  )
}
