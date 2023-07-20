import React from 'react'

const Navbar = () => {
  return (
    <div id='navbar-wrapper'>
        <input type="checkbox" name="box" id="navbar-box" />
        <label htmlFor="navbar-box">
            <span></span>
        </label>
        <nav>
            <ul>
                <li><a href="#">home</a></li>
                <li><a href="#calculator-1">calculator 1</a></li>
                <li><a href="#calculator-2">calculator 2</a></li>
                <li><a href="#calculator-3">calculator 3</a></li>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar