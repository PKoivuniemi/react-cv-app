import './App.css';
import React from 'react';
import Profile from './Profile.js';
import Content from './Content.js';
//import content from '../cvContent.js';


class App extends React.Component {
  render() {
    return(
      <div className="App">
        <Profile name="Petteri Koivuniemi" />
        <Content />
      </div>
    );
   }
}

export default App;
