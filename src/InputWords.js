import React, { useState } from 'react';

function InputWords({addWord}) {
  const[word, setWord] = useState("");
  const [descr, setDescr] = useState("");
/*
  function onTrigger(e) {
    props.handleCallBack(word, descr);
    e.preventDefault();
  }
  */
  return (
  <form onSubmit={ (e) => addWord(word, descr)}>
    <label> Word: </label>
    <input
      type='text'
      value={word}
      required
      onChange={ (e) => setWord(e.target.value)}
    />
    <label>Definition:</label>
    <textarea
      required
      onChange={ (e) => setDescr(e.target.value)}
    ></textarea>
    <input type='submit' value="Submit"/>
  </form>
  )
}
export default InputWords;