import React from 'react'

import './App.css';
import Header from './components/Header'
import Form from './components/Form'
import Search from './components/Search'

function App() {

  const [books, setBooks] = React.useState([{
    title: 'Lapvona',
    author: 'Ottessa Moshfegh',
    pages: 287,
  }, {
    title: 'A Little Life',
    author: 'Hanya Yanagihara',
    pages: 816,
  }, {
    title: 'No One Is Talking About This',
    author: 'Patricia Lockwood',
    pages: 207,
  },
  ])


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
