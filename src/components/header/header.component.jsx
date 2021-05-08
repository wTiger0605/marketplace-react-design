import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

import Logo from "../../assets/logo.png"
import Avatar from "../../assets/avatar.png"
import Searchicon from "../../assets/search-icon.png"
import Btnback from "../../assets/btn_back.png"

import "./header.styles.scss";

const Header = () => (
	<div className="header-company">
		<div className="header-left">
	 		<Link className="logo-container" to="/">
	 			<img src={Logo} className="logo" />
	 			<p className="logo-text">Simply Markets</p>
	 		</Link>
			<div className="header-avatar">
				<img src={Avatar} className="avatar-img" alt=""/>
				<p className="account-name">Hello Jake!</p>
			</div>
	 	</div>
		<div className="header-right">
			<div className="searchbar-container">
	 			<img src={Searchicon} className="search-icon"/>
	 			<input type="text" className="searchbar" placeholder="Search"/>
			</div>
		</div>
	</div>
);

export default Header;
