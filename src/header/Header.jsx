import React from 'react';
import "./header.css";

export default function Header() {
  return (
    <div className='header'>
      <div className="topleft">
      <i className="topIcon fa-brands fa-facebook"></i>
      <i className="topIcon fa-brands fa-instagram"></i>
      <i className="topIcon fa-brands fa-twitter"></i>
      <i className="topIcon fa-brands fa-pinterest"></i>
      </div>

      <div className="topcentre">
        <ul className='topList'>
            <li className='topListItem'>HOME</li>
            <li className='topListItem'>ABOUT</li>
            <li className='topListItem'>CONTACT</li>
            <li className='topListItem'>WRITE</li>
            <li className='topListItem'>LOGOUT</li>
        </ul>
      </div>
      <div className="topright">
        <img className='topImage' src=" https://drive.google.com/thumbnail?id=0Bwc-FnC-UeCIYzRudjN4c3I0WnVGRlpNZ3VMR3BEUzE0U3VV" alt="" />
        <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  )
}
