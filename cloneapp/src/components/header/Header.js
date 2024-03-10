import React from 'react'
import './Header.css'
// import "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"

const Header = () => {
  return (
    <div className='max-width Header'>
        <img src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"  className='header-icon'/>
        <ul className='header-items'>
            <li className='location-items'>
                <div className='items-container'>
                    <div className='flex-items left-items'>
                        <div className='location-icon'><i class="material-icons ">location_on</i></div>
                        <input type='text' placeholder='Visakhapatnam'/>
                        <i class="material-icons">expand_more</i>
                    </div>
                    
                    <div className='flex-items right-items'>
                        <div className='separator'></div>
                        <i className='fa fa-search searchicn'></i>
                        <input type='text' placeholder="Search for restaurant, cuisine or a dish"/>
                    </div>
                </div>
                
            </li>
            <li > <a href='#' className='h-login' >Login</a> </li>
            <li > <a href='#' className='h-signup' >Sign Up</a> </li>
        </ul>
    </div>
  )
}

export default Header