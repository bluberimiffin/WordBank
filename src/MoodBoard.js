import React, { useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function MoodBoard() {
  const[content, setContent] = useState([]);
  //sets whether we can see selectType Screen and inputContent Screen.
  const[stVisible, setstVisible] = useState(false);
  //sets type of content that can be submitted. text = 0, url = 1, pic = 2
  const[type, setType] = useState(0);
  //stores current content that may be added to board.
  const[item, setItem] = useState(null);


  async function createPost() {
    if (item === null) {
      alert("Post is empty. Upload content.");
      return;
    }
    if (type === 0) {
      let value = React.createElement('p', null, item);
      const post = <span className="border fluid h-auto w-auto">{value}</span>;
      setContent([...content, post]);
    } else if (type === 1) {
      const value = <a href={item}>{item}</a>
      const post = <span className="border fluid">{value}</span>;
      setContent([...content, post]);
    } else {
      const value = <img src={item} className="img-fluid" alt="uploaded by user"/>
      const post = <div className="border w-25 h-25">{value}</div>;
      setContent([...content, post]);
    }
  }

  function inputVisible(visible) {
    if (visible) {
    id('file-input').className = 'd-block';
    id('choose-type').className = 'd-block';
    id('cancel').className = 'd-block';
    } else {
      id('file-input').className = 'd-none';
    id('choose-type').className = 'd-none';
    id('cancel').className = 'd-none';
    }
  }

  function enableInput() {
    setItem(null);
    if (type === 0) {
      id('text-submit').disabled = false;
      id('link-submit').disabled = true;
      id('link-submit').value = "";
      id('pic-submit').disabled = true;
      id('pic-submit').value = "";
    } else if (type === 1) {
      id('text-submit').disabled = true;
      id('text-submit').value = "";
      id('link-submit').disabled = false;
      id('pic-submit').disabled = true;
      id('pic-submit').value = "";
    } else {
      id('text-submit').disabled = true;
      id('text-submit').value = "";
      id('link-submit').disabled = true;
      id('link-submit').value = "";
      id('pic-submit').disabled = false;
    }
  }
  return (
    <div>
      <h1 className="text-center display-4 fs-1">Mood Board</h1>
      <div className='m-2'>
        <CreateButton inputVisible={inputVisible}/>
        <CancelButton inputVisible={inputVisible}/>
      </div>
      <SelectType setType= {setType} enableInput={enableInput} type={type}/>
      <InputContent item={item} setItem={setItem} createPost={createPost}/>
      <Board content={content}/>
    </div>
  )
}
const Board = props => {
  return (
    <div className="d-flex">
        {props.content}
    </div>
  )
}

const CreateButton = props=> {
  return (
    <button
      className='btn btn-info'
      onClick={() =>{props.inputVisible(true)}}
    >
      Add Pin
    </button>
  )
}

const CancelButton = props => {
  return (
    <div id="cancel" className='d-none'>
      <button type="button" className='btn btn-danger' onClick={e=> {
        e.preventDefault();
        props.inputVisible(false);
      }}>Cancel Pin</button>
    </div>
  )
}

//needs type, setType, enableInput
const SelectType = props => {
  return (
    <div className="d-none" id="file-input">
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
    </div>
  )
}

//needs setItem,
const InputContent = props => {
  return (
    <div className="d-none" id="choose-type">
      <form onSubmit={e => {
        e.preventDefault();
        props.createPost();
      }}>
        <div className="container border">
            <input
              id="pic-submit"
              type="file"
              onChange={e=> {
                e.preventDefault();
                props.setItem(URL.createObjectURL(id('pic-submit').files[0]));
              }}
              accept=".png, .jpg" disabled
              name='submit-pic'
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
            <label for="input-text">Input Passage:</label>
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


/**
 * Returns an element on the page that has that ID.
 * @param {string} id - id of element intended to be returned.
 * @returns {Element} - an element with given id.Null if no element found.
 */
 function id(id) {
  return document.getElementById(id);
}
export default MoodBoard;