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
  //sets whether we can see selectType Screen and inputContent Screen.
  const[stVisible, setstVisible] = useState(false);
  const[icVisible, seticVisible] = useState(false);
  //sets type of content that can be submitted.
  const[type, setType] = useState(0);
  //stores current content that may be added to board.
  const[input, setInput] = useState(null);

  function inputVisible() {
    id('file-input').className = 'd-block';
    id('choose-type').className = 'd-block';
  }
  function enableInput(num) {
    seticVisible(true);
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
      <h1 className="text-center">Mood Board</h1>
      <CreateButton inputVisible={inputVisible}/>
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
  return (<button className='btn btn-info' onClick={props.inputVisible}>Add Pin</button>)
}
//needs type, setType, enableInput
const SelectType = props => {
  return (
    <form onSubmit={e => {
      e.preventDefault();
      props.enableInput();
    }}>
    <div className="container col-5 border">
      <div className="row">
        <div className="col">
          <label>
            <input
              type="radio"
              value={2}
              onClick={() => {props.setType(2)}}
              checked={props.type === 2}
              />
            <span>Picture</span>
        </label>
        </div>
        <div className="col">
          <label>
            <input
              type="radio"
              value={1}
              onClick={() => {props.setType(1)}}
              checked={props.type === 1}
              />
                <span>Link</span>
          </label>
        </div>
        <div className="col">
        <label>
          <input
            type="radio"
            value={0}
            onClick={() => {props.setType(0)}}
            checked={props.type === 0}
            />
              <span>Text</span>
        </label>
        </div>
        <div className="col">
          <button type="submit">Select</button>
        </div>
      </div>
      </div>
    </form>
  )
}

//needs setItem,
const inputContent = props => {
  return (
    <div className="d-none" id="file-input">
    <form>
      <div className="container border">
          <input
            id="pic-submit"
            type="file"
            onChange={e=> {
              e.preventDefault();
              props.setItem(id('pic-submit').value);
            }}
            accept=".png, .jpg" disabled
          ></input>
          <label for="submit-url">Input URL:</label>
          <input
            id="link-submit"
            type="url"
            onChange={e=> {
              e.preventDefault();
              props.setItem(id('link-submit').value);
            }}
            name="submit-url" disabled
          ></input>
          <label for="submit-url">Input Passage:</label>
          <textarea
            id="text-submit"
            onChange={e=> {
              e.preventDefault();
              props.setItem(id('text-submit').value);
            }}
            name="input-text" disabled ></textarea>
          <input type="submit" value="Add"></input>
      </div>
    </form>
    </div>
  )
}



const AddPin = props => {
  const[type, setType] =useState(0);
  const[input, setInput] = useState(null);
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

  function setItem(item) {
    setInput(item);
    console.log(item);
  }

  return (
   <div>
    <div className="d-none" id="choose-type">
      <form onSubmit={e => {
        e.preventDefault();
        enableInput(type)
      }}>
      <div className="container col-5 border">
        <div className="row">
          <div className="col">
            <label>
              <input
                type="radio"
                value={2}
                onClick={() => {setType(2)}}
                checked={type === 2}
                />
              <span>Picture</span>
          </label>
          </div>
          <div className="col">
            <label>
              <input
                type="radio"
                value={1}
                onClick={() => {setType(1)}}
                checked={type === 1}
                />
                  <span>Link</span>
            </label>
          </div>
          <div className="col">
          <label>
            <input
              type="radio"
              value={0}
              onClick={() => {setType(0)}}
              checked={type === 0}
              />
                <span>Text</span>
          </label>
          </div>
          <div className="col">
            <button type="submit">Select</button>
          </div>
        </div>
        </div>
      </form>
    </div>
    <div className="d-none" id="file-input">
    <form>
      <div className="container border">
          <input
            id="pic-submit"
            type="file"
            onChange={e=> {
              e.preventDefault();
              setItem(id('pic-submit').value);
            }}
            accept=".png, .jpg" disabled
          ></input>
          <label for="submit-url">Input URL:</label>
          <input
            id="link-submit"
            type="url"
            onChange={e=> {
              e.preventDefault();
              setItem(id('link-submit').value);
            }}
            name="submit-url" disabled
          ></input>
          <label for="submit-url">Input Passage:</label>
          <textarea
            id="text-submit"
            onChange={e=> {
              e.preventDefault();
              setItem(id('text-submit').value);
            }}
            name="input-text" disabled ></textarea>
          <input type="submit" value="Add"></input>
      </div>
    </form>
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