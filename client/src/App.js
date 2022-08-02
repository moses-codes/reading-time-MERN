import React, { useEffect, useState } from 'react'

import './App.css';
import Header from './components/Header'
import Form from './components/Form'
import Search from './components/Search'

function App() {

  const [books, setBooks] = React.useState([{}])

  React.useEffect(() => {
    fetch('http://localhost:3001/api')
      .then(res => res.json())
      .then(data => {
        console.log(data.books)
        setBooks(data.books)
      })
  }, [])


  const bookShelf = books.map(book => {
    return (
      <li>
        <Form
          title={book.title}
          author={book.author}
          pages={book.pages}
          className="bookForm"
        />
      </li>
    )
  })

  return (
    <div className="App">
      <header>
        <Header />
        <Search />
      </header>
      <ul className='bookShelf'>
        {bookShelf}
      </ul>
    </div>
  );
}

export default App;
