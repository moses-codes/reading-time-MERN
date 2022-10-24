import React, { useEffect, useState } from 'react'

import './App.css';
import Header from './components/Header'
import Form from './components/Form'
import Search from './components/Search'

function App() {

  const [books, setBooks] = React.useState([{}])

  React.useEffect(() => {
    console.log('Effect Ran');
    async function getData() {
      const res = await fetch('http://localhost:3001/api');
      const data = await res.json();
      setBooks(data);
    }
    getData();
  }, []);
  console.log(books);


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
