import React from "react"
import { Link } from "react-router-dom"
import { useQuery, gql } from "@apollo/client"

const CATEGORIES = gql`
  query GetCategories {
    categories {
      name
      id
    }
  }
`

export const Header = () => {
  const { loading, error, data } = useQuery(CATEGORIES)

  if (loading) return <p>Loading ...</p>
  if (error) return <p>ERROR ...</p>
  return (
    <div className='site-header'>
      <Link to='/'>
        <h1>Nintendo Reviews</h1>
      </Link>
      <nav className='categories'>
        <span>Filter reviews by category:</span>
        {data.categories.map((cat) => (
          <Link key={cat.id} to={`/category/${cat.id}`}>
            {cat.name}{" "}
          </Link>
        ))}
      </nav>
    </div>
  )
}
