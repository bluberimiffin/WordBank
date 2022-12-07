import './App.css';
import MoodBoard from './MoodBoard';
import WordBankPage from './WordBankPage.js'
import Menu from './Menu.js'
import React, { useState} from 'react';
function App() {

  function display(num) {
    if (num === 0) {
      id('wbp').className = "d-block";
      id('mb').className = "d-none";
    } else {
      id('wbp').className = "d-none";
      id('mb').className = "d-block";
    }
  }
  return (
    <div className='container'>

      <Menu display={display} />
      <div className="d-none" id="wbp">
        <WordBankPage />
      </div>
      <div id="mb" className="d-none">
      <MoodBoard />
      </div>

      <div className="fixed-bottom">
        <h1 className="display-4 fs-4">Created by Andre Casiano for Out in Tech, 2022</h1>
        <h1 className="display-4 fs-4">
          Link to GitHub: <a href="https://github.com/bluberimiffin/WordBank">https://github.com/bluberimiffin/WordBank</a>
        </h1>
        <h1 className="display-4 fs-4">
          LinkedIn: <a href="https://www.linkedin.com/in/andre-b-casiano/">https://www.linkedin.com/in/andre-b-casiano/ </a>
        </h1>
      </div>
    </div>
  );
}
/**
 * Returns an element on the page that has that ID.
 * @param {string} id - id of element intended to be returned.
 * @returns {Element} - an element with given id.Null if no element found.
 */
 function id(id) {
  return document.getElementById(id);
}

export default App;
