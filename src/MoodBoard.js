import React, { useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function MoodBoard() {
  const[content, setContent] = useState([
    {
      "type" : "p",
      "value" : "test"
    },
    {
      "type" : "p",
      "value" : "test 2"
    }
  ]);
  return (
    <div>
      <h1 className="text-center">Mood Board</h1>
      <CreateButton />
      <AddPin />
      <Board content={content}/>
    </div>
  )
}
const Board = props => {
  let board =[];
  for (let i = 0; i < props.content.length; i++) {
    let info = props.content[i];
    if (info["type"]==="p") {
      let post = React.createElement('p', null, props.content[i]['value']);
      board.push(post);
    }
  }
  return (
    <div className="container-fluid d-flex flex-wrap">
      {board}
    </div>
  )
}
const CreateButton = props=> {
  return (<button className='btn btn-info'>Add Pin</button>)
}

const AddPin = props => {
  function enableInput(num) {
    if (num === 0) {
      id('text-submit').disabled = false;
      id('link-submit').disabled = true;
      id('pic-submit').disabled = true;
    } else if (num === 1) {
      id('text-submit').disabled = true;
      id('link-submit').disabled = false;
      id('pic-submit').disabled = true;
    } else {
      id('text-submit').disabled = true;
      id('link-submit').disabled = true;
      id('pic-submit').disabled = false;
    }
  }
  return (
  <div>
      <div className='container border col-sm-2 p-2'>
        <div className="form-check">
            <input className="form-check-input" name="choose-content"
                type="radio"  id="textOption" value="p"></input>
        <label className="form-check-label" for="textOption">
          Text
        </label>
      </div>
      <div className="form-check">
            <input className="form-check-input" name="choose-content"
            type="radio" id="linkOption" value="a"></input>
        <label className="form-check-label" for="LinkOption">
          Link
        </label>
      </div>
      <div className="form-check">
            <input className="form-check-input" name="choose-content"
            type="radio" id="picOption" value="img"></input>
        <label className="form-check-label" for="LinkOption">
          Picture
        </label>
      </div>
      <div className="row">
        <div className="col-sm-6"></div>
        <input className="col-sm-5" type="submit" value="Add"></input>
      </div>
    </div>
    <div className="container border">
        <input id="pic-submit"type="file" accept=".png, .jpg" disabled></input>
        <label for="submit-url">Input URL:</label>
        <input id="link-submit" type="url" name="submit-url" disabled></input>
        <label for="submit-url">Input Passage:</label>
        <textarea id="text-submit" name="input-text"disabled ></textarea>
        <input type="submit" value="Add"></input>
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
export default MoodBoard;