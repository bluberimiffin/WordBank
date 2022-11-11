import React, { useState} from 'react';

function WordBank() {
  const [dict, setDict] = useState({});
  return (
    <div>
        <form onSubmit= {(e) => {
          let word = id("word").value;
          let definition = id("def").value;
          e.preventDefault();
          setDict({...dict, [word] : definition});
          id("word").value = "";
          id("def").value = "";
        }}>
          <input type="text" id="word"/>
          <textarea type="text" id="def"/>
          <input type="submit" value="Add Word" />
        </form>
        <DisplayList words={Object.keys(dict)} dict={dict} />
    </div>
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
      <table >
        <body>
          {r.map(row => <tr><td>{row[0]}</td><td>{row[1]}</td></tr>)}
        </body>
      </table>
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