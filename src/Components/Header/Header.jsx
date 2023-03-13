import React from 'react'
import logo from "../Assets/logo.png"
import { Link } from 'react-router-dom';
import {ImSearch} from "react-icons/im"

const Header = () => {
  return (
		<nav className="header">
			<img src={logo} alt="logo" />

            <ul>
                <li>
                    <Link to='/tvshows'>TV Shows</Link>
                </li>
                <li>
                    <Link to='/movies'>Movies</Link>
                </li>
                <li>
                    <Link to='/recent'>Recently Added</Link>
                </li>
                <li>
                    <Link to='/mylist'>My List</Link>
                </li>
                
            </ul>
            <ImSearch/>
		</nav>
  );
}

export default Header