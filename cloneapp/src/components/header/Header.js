import React from 'react'
import './Header.css'
import "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"

const Header = () => {
  return (
    <div className='max-width Header'>
        <img src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png" alt="Zomato image" className='header-icon'/>
        <ul className='header-items'>
            <li className='location-items'>
                <div className='items-container'>
                    <div className='location-icon'><i class="fa fa-car fa-lg"></i></div>
                </div>
            </li>
            <li className='h-login'> <a>Login</a> </li>
            <li className='h-signup'> <a>Sign Up</a> </li>
        </ul>
    </div>
  )
}

export default Header