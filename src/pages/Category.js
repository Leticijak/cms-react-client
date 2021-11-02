import React from "react"
import { useQuery, gql } from "@apollo/client"
import { Link } from "react-router-dom"
import { useParams } from "react-router"

const CATEGORY = gql`
  query GetCategory($lacpa: ID!) {
    category(id: $lacpa) {
      name
      id
      reviews {
        title
        body
        rating
        id
        published_at
        categories {
          name
          id
        }
      }
    }
  }
`

export const Category = () => {
  const { id } = useParams()
  const { loading, data, error } = useQuery(CATEGORY, {
    variables: { lacpa: id },
  })
  console.log(data)
  if (loading) return <p>Loading</p>
  if (error) return <p>Error</p>
  return (
    <div>
      <h2>{data.category.name}</h2>

      {data.category.reviews.map((rev) => (
        <div className='review-card' key={rev.id}>
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
