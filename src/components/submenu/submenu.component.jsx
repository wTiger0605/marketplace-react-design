import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

import "./submenu.styles.scss";

const Submenu = () => (
	<div className="submenu">
		<div className="submenu-left">
            <Link className="submenu-item">Standards</Link>
        </div>
        <div className="submenu-right">
            <Link className="submenu-item">Macro</Link>
            <Link className="submenu-item">Equities</Link>
            <Link className="submenu-item">Company profile</Link>
            <Link className="submenu-item">Commodities</Link>
            <Link className="submenu-item">Crypto</Link>
        </div>
	</div>
);

export default Submenu;
