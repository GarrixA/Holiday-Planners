import React from 'react'
import './menu.css'

function Menu() {
    return (
        <div>
            <input type="checkbox" id="active"/>
            <label for="active" class="menu-btn"><span></span></label>
            <label for="active" class="close"></label>
            <div class="wrapper">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Services</li>
                    <li>Gallery</li>
                    <li>Feedback</li>
                </ul>
            </div>
        </div>
    )
}

export default Menu
