import React from "react"
import { useParams } from "react-router"
import { useQuery, gql } from "@apollo/client"

const REVIEW = gql`
  query GetReview($racq: ID!) {
    review(id: $racq) {
      title
      id
      published_at
      body
      rating
      categories {
        name
        id
      }
    }
  }
`

export const ReviewDetails = () => {
  const { id } = useParams()

  const { loading, data, error } = useQuery(REVIEW, {
    variables: { racq: id },
  })
  console.log(data)

  if (loading) return <p>Loading...</p>
  if (error) return <p>ERROR</p>

  return (
    <div className='review-card'>
      <div className='rating'>{data.review.rating}</div>
      <h2> {data.review.title} </h2>
      <small>Date: {data.review.published_at.slice(0, 10)}</small>
      <br />
      {data.review.categories.map((cats) => (
        <small key={cats.id}> {cats.name}</small>
      ))}
      <p> {data.review.body}...</p>
    </div>
  )
}
