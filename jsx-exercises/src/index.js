import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';

function MyThing() {
  return (
    <div className="book">
      <div className="title">
        The Title
      </div>
      <div className="author">
        The Author
      </div>
      <ul className="stats">
        <li className="rating">
          5 stars
        </li>
        <li className="isbn">
          12-345678-910
        </li>
      </ul>
    </div>
  );
}

function NewThing() {
  return (
    React.createElement('div', {},
      React.createElement('div', {className: 'title', children: ['The Title']}),
      React.createElement('div', {className: 'author', children: ['The Author']}),
      React.createElement('ul', {className: 'stats'},
        React.createElement('li', {className: 'ratings', children: ['5 stars']}),
        React.createElement('li', {className: 'isbn', children: ['12-345678-910']}),
      )
    )
  );
}

function Greeting() {
  var message;
  var username = 'root';
  // var username = undefined;
  // var username = null;
  // var username = false;

  var loggedIn;
    if(typeof username === 'string' && username){
      message = <h1>Welcome, {username}</h1>
    }else if (typeof username === 'undefined' || typeof username === 'null') {
      message = <h1>Not logged in.</h1>
    } else {
      message = <h1>Please try again</h1>
    }

  return (
    <div>
      {message}
    </div>
  );
}

ReactDOM.render(<Greeting />, document.getElementById('root'));
