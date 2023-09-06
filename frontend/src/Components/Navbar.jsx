import React from 'react';
import "./Navbar.css";
import navLogo from  "../Logo/navlogo.png"
import {BsBellFill,BsFillHeartFill} from "react-icons/bs";
import {RxAvatar} from "react-icons/rx";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  const onHome = () => {
    return navigate ("/")
  }

  return (
    <div className='navbar'>
       <div className='navbar-1'>
        <div className='logo'>
          <img src={navLogo} alt="Cine Radar" onClick={onHome} />
        </div>
        <div className='menu'>
          <ul>
            <li><Link to="/movies">Movies</Link></li>
            <li><Link to="/tvshows">TV Shows</Link></li>
            <li><Link to="/people">People</Link></li>
          </ul>
        </div>
       </div>
       <div className='navbar-2'>
        <div>
          <ul>
            <li><BsBellFill fontSize={"20px"}  /></li>
            <Link to="/favourite"><li><BsFillHeartFill fontSize={"20px"} color='white' /></li></Link>  
            <Link to="/login"><li><RxAvatar fontSize={"25px"} fontWeight={"600"} color='white' /></li></Link>
          </ul>
        </div>
        
       </div>
    </div>
  )
}

export default Navbar;
