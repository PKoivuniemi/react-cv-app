import './App.css';
import React from 'react';
import Profile from './Profile.js';
import Content from './Content.js';


class App extends React.Component {
  static content = { foo: "bar"};
  render() {
    return(
      <div className="App">
        <Profile />
        <Content />
      </div>
    );
   }
}

export default App;
