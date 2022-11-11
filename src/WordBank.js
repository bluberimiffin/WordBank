import React, { useState, useEffect } from 'react';
function WordBank() {
  const [words,setWords] = useState(["test", "test"]);
  const [defs, setDefs] = useState([]);

  function addWord(word, def) {
    setWords(word);
    setWords(def);
  }
  return (
    <div>
      <InputWord addWord={addWord}/>
      <DisplayList words={words}/>
      <ul>
        {words.map(string => <p>{string}</p>)}
      </ul>
    </div>
  )

}
const InputWord = props => {
  const [word, setWord] = useState('');
  const [def, setDef] = useState('');
  useEffect(() => {

  }, [])
  return (
    /*
  <div>
    <h2>Enter word:</h2>
    <input type="text" onChange={event => props.changeWord(event.target.value)}/>
    <h2>Enter definition:</h2>
    <input type="text" onChange={event => props.changeDef(event.target.value)}/>
  </div>
  */
      <form>
        <input type="text" name="word" onChange={ e => setWord(e.target.value)}/>
        <input type="text" name="def" onChange={e => setDef(e.target.value)}/>
        <input type="submit" onSubmit={props.addWord({word}, {def})}/>
      </form>
  )
}

const DisplayList = props => {
  /*
  console.log(list);
  let jsWords = [];
  let jsDefs = [];
  for (let i = 0; i < list.length; i++) {
    let word = <li>{list[i]}</li>;
    let def = <li>{props.bank[list[i]]}</li>;
    jsWords.push(word);
    jsDefs.push(def);
  }
*/
useEffect(() => {

}, [])
  const items = props.words.map(string => <p>{string}</p>);
  return (
    <div>
      {items}
    </div>
  )
}
export default WordBank;