import React from 'react';
import './Navbar.css'
import logo from "../images/1.jpg"
import git from "../images/github.svg"
import In from "../images/linkedin.svg"
import menu from "../images/menu-bar.svg"
import { Link,} from 'react-router-dom';



const Navbar = () => {
  return (
  <nav>
    <img src={logo} alt='logo' />
    <ul>
        <button><li>About</li></button>
        <button><li>Portfolio</li></button>
        <button><li>Testimonials</li></button>
       <button><Link to="/Blog"><li>Blog</li></Link> </button>
    </ul>
    <div>
        <Link to={{pathname: '//github.com/Sanjolawal'}}><img src={git} alt='pic'/></Link>
        <Link to={{pathname: '//www.linkedin.com/in/sanjolawal'}}><img src={In} alt='pic'/></Link>
        <img src={menu} alt='pic'className='menu1'/>
    </div>
     <img src={menu} alt='pic'className='menu'/>
     <button className='hire'>Hire me</button>
  </nav>
  )
};

export default Navbar;

