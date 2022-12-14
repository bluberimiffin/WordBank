import React, { useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function WordBankPage() {
  const[bankNames, setBankNames] = useState([]);
  const[wbs, set_wbs] = useState({"" : ""});
  const[currBank, setBank] = useState("");

  function addBank(name) {
    if (bankNames.includes(name)) {
      alert("This name is already taken. Choose another name.");
      return;
    }
    setBankNames([...bankNames, name]);
    set_wbs({
      ...wbs,
      [name] : {},
    })
  }

  function addWord(word, definition, bankName) {
      wbs[bankName][word]= definition;
      set_wbs({...wbs});
  }

  function showWindow() {
    id("createList").className = "d-block";
  }

  function displayBank() {
    id("wordBank").className = "d-block";
  }

  return (
    <div>
      <h1 className="text-center display-4 fs-1">Word Bank</h1>
      <h2 className="text-center display-4 fs-2">Select Word Bank</h2>
      <div className="container">
        <div className="row">
          <div className="col">
          <SelectBank displayBank={displayBank} setBank={setBank} banks={bankNames} />
          </div>
          <div className="col">
            <CreateButton showWindow={showWindow} />
          </div>
        </div>
      </div>
      <div className="d-none" id="createList">
        <div>
          <div className='row'>
              <div className='col-4'>
                <CreateList addBank={addBank}/>
              </div>
              <div className='col-1'>
                <ExitList />
            </div>
          </div>
        </div>
      </div>
      <div className="d-none" id="wordBank">
        <InputWord addWord={addWord} currBank = {currBank}/>
        <DisplayList dict={wbs[currBank]}/>
      </div>
    </div>
  )
}

function ExitList() {
  return (
    <button type="button" className='btn btn-danger' onClick={e=> {
      e.preventDefault();
      id("name").value = "";
      id("createList").className = "d-none";
    }}>X</button>
  )
}

const CreateList = props => {
  return (
    <form onSubmit={e => {
      e.preventDefault();
      let bankName = id("name").value;
      props.addBank(bankName);
      id("name").value = "";
      id("createList").className="d-none";
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
      props.setBank(id("list").value);
    }}>
      <div className="container">
        <div className="row">
      <select id="list" className="form-select col" required>
        {props.banks.map(word => <option value={word} key={word}>{word}</option>)}
      </select>
      <input className="col-3" type="submit" value="Select"></input>
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

const InputWord = props => {
  return (
        <form onSubmit={e => {
            e.preventDefault();
            let word = id("word").value;
            let definition = id("def").value;
            props.addWord(word, definition, props.currBank);
            id('word').value = "";
            id('def').value = "";
        }}>
          <div className="container border">
            <div className="row">
              <div className="row col-8">
              <label for="word">Input Word:</label>
              <input type="text" name="word" id="word" required/>
              <label for="definition">Type in Definition:</label>
              <textarea type="text" id="def" required/>
            </div>
            <div className="row justify-content-end">
              <input className="btn btn-primary btn-success col-4 justify-content-end"  type="submit" value="Add Word" />
              </div>
          </div>
          </div>
        </form>
  )
}

const DisplayList = props => {
  let words = Object.keys(props.dict);
  let defs = [];
  for (let i = 0; i < words.length; i++) {
    defs.push(props.dict[words[i]]);
  }
  let parent = [words, defs];
  var r = parent[0].map(function(col, i) {
    return parent.map(function(row) {
      return row[i];
    });
  });
  return (
    <div>
      <div className=" container">
      <table className="table table-striped border">
        <thead>
          <tr>
                <th className="border text-center col-6">Word:</th>
                <th className="border text-center col-6">Definition:</th>
          </tr>
        </thead>
        <tbody>
          {r.map(row => <tr key={row[0]}><td className="col">{row[0]}</td><td>{row[1]}</td></tr>)}
        </tbody>
      </table>
      </div>
    </div>
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