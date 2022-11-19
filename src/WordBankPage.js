import React, { useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import WordBank from './WordBank.js'
function WordBankPage() {
  const[bankNames, setBankNames] = useState([]);
  const[wbs, set_wbs] = useState({});

  function addBank(name) {
    if (bankNames.includes(name)) {
      alert("This name is already taken. Choose another name.");
      return;
    }
    setBankNames([...bankNames, name]);
    set_wbs({
      ...wbs,
      name : {},
    })
  }

  function showWindow() {
    id("createList").className = "visible";
  }

  function displayBank() {
    id("wordBank").className = "visible";
  }

  return (
    <div>
      <h2 className="text-center">Select WordBank</h2>
      <div className="container">
        <div className="row">
          <div className="col">
          <SelectBank displayBank={displayBank} words={bankNames} />
          </div>
          <div className="col">
            <CreateButton showWindow={showWindow} />
          </div>
        </div>
      </div>
      <div className="invisible" id="createList">
        <CreateList  addBank={addBank}/>
      </div>
      <div className="invisible" id="wordBank">
        <WordBank />
      </div>
    </div>
  )
}

const CreateList = props => {
  return (
    <form onSubmit={e => {
      e.preventDefault();
      let bankName = id("name").value;
      props.addBank(bankName);
      id("name").value = "";
      id("createList").className="invisible";
    }}>
          <input type="text" id="name" required/>
          <input
            className="btn btn-primary btn-info"
            type="submit"
            value="Add New WordBank"
          />
    </form>
  )
}
const SelectBank = props => {

  return (
    <form onSubmit={e => {
      e.preventDefault();
      props.displayBank();
    }}>
      <div className="container">
        <div className="row">
      <select className="form-select col" >
        {props.words.map(word => <option value={word} key={word}>{word}</option>)}
      </select>
      <input className="col-3" type="submit"></input>
        </div>
      </div>
    </form>
  )
}
const CreateButton = props => {
  return (
    <button className="btn btn-outline-success" type="button" onClick={props.showWindow}>Add New List</button>
  )
}

/**
 * Returns an element on the page that has that ID.
 * @param {string} id - id of element intended to be returned.
 * @returns {Element} - an element with given id.Null if no element found.
 */
 function id(id) {
  return document.getElementById(id);
}
export default WordBankPage;