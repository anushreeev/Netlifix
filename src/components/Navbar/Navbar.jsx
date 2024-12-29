import React, { useEffect, useRef } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import serach_icon from '../../assets/search_icon.svg'
import bell_icon from '../../assets/bell_icon.svg'
import profile_img from '../../assets/profile_img.png'
import caret_icon from '../../assets/caret_icon.svg'
import { useResolvedPath } from 'react-router-dom'
import { logout } from '../../firebase'

const Navbar = () => {
const navRef = useRef();

useEffect(()=>{
window.addEventListener('scroll', ()=>{
  if(window.scrollY >= 80){
    navRef.current.classList.add('nav-dark')
  }else{
    navRef.current.classList.remove('nav-dark')
  }
})
},[])
  return (
    <div className='navbar' ref={navRef}>
      <div className="navbar_left">
      <img src={logo} alt="" />
      <ul>
        <li>HOME</li>
        <li>TV Showes</li>
        <li>Movies</li>
        <li>New & Populer</li>
        <li>My List</li>
        <li>Browser by Languges</li>
      </ul>
      </div>
      <div className="navbar_right">
    <img src={serach_icon} alt=""  className='icons'/>
    <p>Children</p>
    <img src={bell_icon} alt=""  className='icons'/>
    <div className="navbar_profile">
    <img src={profile_img} alt=""  className='Profiles'/>
    <img src={caret_icon} alt=""/>
    <div className="dropdown">
      <p onClick={()=>{logout()}}> Sign Out Netflix</p>
    </div>
    </div>
      </div>
    </div>
  )
}

export default Navbar
