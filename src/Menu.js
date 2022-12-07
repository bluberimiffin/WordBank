import React, { useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Menu(props) {
  return (
    <div className='container col-2 border border-info'>
      <h1 className='text-center'>Menu</h1>
      <ul class="navbar-nav">
        <li className='nav-item btn' onClick={() => {props.display(0)}}>WordBank</li>
        <li className='nav-item btn' onClick={() => {props.display(1)}}>Mood Board</li>
        <li className='nav-item btn'>Diary</li>
      </ul>
    </div>
  )
}

export default Menu;