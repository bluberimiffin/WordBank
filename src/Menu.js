import React, { useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Menu(props) {
  return (
    <div className='container col-2 border border-info fixed-left'>
      <h1 className='text-center display-4'>Menu</h1>
      <ul class="navbar-nav">
        <li className='nav-item btn display-4 fs-5' onClick={() => {props.display(0)}}>WordBank</li>
        <li className='nav-item btn display-4 fs-5' onClick={() => {props.display(1)}}>Mood Board</li>
        <li className='nav-item btn display-4 fs-5'>Diary</li>
      </ul>
    </div>
  )
}

export default Menu;