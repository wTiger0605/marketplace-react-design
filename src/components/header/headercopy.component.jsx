import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

import { ReactComponent as Logo } from "../../assets/crown.svg";

import "./header.styles.scss";

const Header = () => (
	<div className="header">
		<Link className="logo-container" to="/">
			<Logo className="logo" />
		</Link>
		<div className="options">
			<div className="dashboards-text">Dashboards</div>
			<Button className="button">
				<Link className="option" to="/companypage">
					COMPANY
				</Link>
			</Button>
			<Button className="button">
				<Link className="option" to="/books">
					BOOKS
				</Link>
			</Button>
			<Button className="button">
				<Link className="option" to="/shop">
					CONTACT
				</Link>
			</Button>
		</div>
	</div>
);

export default Header;
