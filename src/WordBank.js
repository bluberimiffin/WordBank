import React, { useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
function WordBank() {
  const [dict, setDict] = useState({});

  function addWord(word, definition) {
    setDict({...dict, [word] : definition});
  }

  return (
    <div>
        <InputWord addWord={addWord} />
        <DisplayList words={Object.keys(dict)} dict={dict} />
    </div>
  )

}
const InputWord = props => {
  return (
        <form onSubmit={e => {

            let word = id("word").value;
            let definition = id("def").value;
            props.addWord(word, definition);
            e.preventDefault();
        }}>
          <input type="text" id="word" required/>
          <textarea type="text" id="def" required/>
          <input className="btn btn-primary btn-success" type="submit" value="Add Word" />
        </form>
  )
}
const DisplayList = props => {
  let defs = [];
  for (let i = 0; i < props.words.length; i++) {
    defs.push(props.dict[props.words[i]]);
  }
  let parent = [props.words, defs];
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

export default WordBank;