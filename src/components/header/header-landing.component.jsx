import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

import Logo from "../../assets/logo.png"
import Searchicon from "../../assets/search-icon.png"
import Btnback from "../../assets/btn_back.png"

import "./header-landing.styles.scss";

const Header = () => (
	<div className="header">
		<div className="header-left">
			<Link className="logo-container" to="/">
				<img src={Logo} className="logo" />
			</Link>
			<div className="searchbar-container">
				<img src={Searchicon} className="search-icon"/>
				<input type="text" className="searchbar" placeholder="Search"/>
			</div>
		</div>
		<div className="menu-container">
			<Link className="menu-item" to="/companypage">
				<h4>Home</h4>
			</Link>
			<Link className="menu-item" to="/companypage">
				<h4>Books</h4>
			</Link>
			<Link className="menu-item" to="/companypage">
				<h4>About us</h4>
			</Link>
			<Link className="menu-item" to="/companypage">
				<h4>Login</h4>
				<img src={Btnback} alt=""/>
			</Link>
		</div>
	</div>
);

export default Header;
