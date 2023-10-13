import React from 'react'
import './menu.css'
import {TbMenuDeep} from 'react-icons/tb'

function Menu() {
    return (
        <div>
            <input type="checkbox" id="active"/>
            <label for="active" class="menu-btn"><span><TbMenuDeep size="40px" color='#fff'/> </span></label>
            <label for="active" class="close"></label>
            <div class="wrapper">
                
                <div className='logo'>

                </div>
                <div className="menu-list">
                    
                </div>
            </div>
            
        </div>
    )
}

export default Menu
