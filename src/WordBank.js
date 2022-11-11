import React, { useState, useEffect } from 'react';
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
          <input type="text" id="def"/>
          <input type="submit" value="Add Word" />
        </form>
        <DisplayList words={Object.keys(dict)} dict={dict} />
    </div>
  )

}


const DisplayList = props => {
  const words = props.words.map(string => <li key={string}>{string}</li>);
  const defs = props.words.map(string => <li key={string}>{props.dict[string]}</li>)
  return (
    <div class="d-flex flex-row">
      <ol>
        {words}
      </ol>
      <ol>
        {defs}
      </ol>
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