import React from 'react'
import './Header.css'
function Header() {
  return (
    <div>
      <nav className='navbar'>
        <div className="left-nev"><p>Survey360</p></div>
        <div className="right-nav">
            <ul><li>Home</li>
            <li>About</li>
            <li>Contact</li></ul>
            </div>
      </nav>
    </div>
  )
}

export default Header
