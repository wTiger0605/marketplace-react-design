import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

import Logo from "../../assets/logo.png"

import "./footer.styles.scss";

const Footer = () => (
	<div className="footer">
		<div className="footer-left">
			<Link className="logo-container" to="/">
				<img src={Logo} className="logo" />
				<p>Terms and privacy.</p>
			</Link>
			<h1>Simply Markets</h1>
		</div>
		<div className="footer-middle">
			<p>Your personal tool to help to analyse companies better and find the next multi bagger for your portfolio.</p>
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
		</div>
	</div>
);

export default Footer;
