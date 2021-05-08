import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

import "./main.styles.scss";
import Searchicon from "../../assets/search-icon-pink.png"

const Main = () => (
	<div className="main">
		<div className="content-container">
			<h1>Simply Markets</h1>
			<p>Your personal tool to help to analyse companies better and find the next multi bagger for your portfolio.</p>
			<div className="searchbar-container">
				<img src={Searchicon} className="search-icon"/>
				<input type="text" className="searchbar" placeholder="Search for a company"/>
			</div>
			<div className="company-container">
				<p>What's trending:</p>
				<label htmlFor="">Microsoft Corp</label>
				<label htmlFor="">Google</label>
				<label htmlFor="">Amazon.com</label>
				<label htmlFor="">Upwork</label>
				<label htmlFor="">Fiverr</label>
				<label htmlFor="">Beyond Meat</label>
				<label htmlFor="">Etsy</label>
				<label htmlFor="">Walt Disney </label>
				<label htmlFor="">Philip Morris International</label>
			</div>
		</div>
	</div>
);

export default Main;
