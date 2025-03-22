import React from 'react'
import '../style/BookList.css'
import Book from './Book'

const BookList = ({ books }) => {

  const bookList = books.map((book, i) => (
    <Book book={book} key={i} />
  ))


  return (
    <div>

      <section className="page-section bg-light" id="portfolio">
        <div className="container">
          <div className="text-center">
            <h2 className="section-heading text-uppercase">BookFolio</h2>
            <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
          </div>
          <div className="row">
            {bookList}

          </div>
        </div>
      </section>
    </div>
  )
}

export default BookList
