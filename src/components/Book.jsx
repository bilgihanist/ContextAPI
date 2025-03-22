import React from 'react'

const Book = ({book}) => {
  return (
    <div>
      <h2>{book.title}</h2>
      <h4>{book.author}</h4>
    </div>
  )
}

export default Book
