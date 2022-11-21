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
    let post = null;
    if (info["type"]==="p") {
      let post = React.createElement('p', null, props.content[i]['value']);
      board.push(post);
    }
  }
  return (
    <div className="container-fluid d-flex">
      {board}
    </div>
  )
}
const CreateButton = props=> {
  return (<button className='btn btn-info'>Add Pin</button>)
}

const AddPin = props => {
  return (
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
  )
}

const addContent = props => {

}
/**
 * Returns a new element of given type.
 * @param {string} tagName - the type of tag that will be created.
 * @returns {Element} element of type of the given tagName. Null if the tagName is not recognized.
 */
  function gen(tagName) {
  return document.createElement(tagName);
}

export default MoodBoard;