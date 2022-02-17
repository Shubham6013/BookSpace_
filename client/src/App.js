import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import CreateBook from './components/CreateBook';
import ShowBookList from './components/ShowBookList';
import ShowBookDetails from './components/ShowBookDetails';
import UpdateBookInfo from './components/UpdateBookInfo';
import HomePage from './components/homepage';
import Admin from './components/admin';
import Cart from './components/cart';
import Feed from './components/feed';
import User from './components/user';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path='/' component={HomePage} /> 
          {/* <Route exact path='/admin' component={Admin} /> */}
          <Route exact path='/user' component={User} />
          <Route exact path='/user-cart' component={Cart} />
          <Route exact path='/show-booklist' component={ShowBookList} />
          <Route path='/create-book' component={CreateBook} />
          <Route path='/feed' component={Feed} />
          <Route path='/edit-book/:id' component={UpdateBookInfo} />
          <Route path='/show-book/:id' component={ShowBookDetails} />
        </div>
      </Router>
    );
  }
}

export default App;