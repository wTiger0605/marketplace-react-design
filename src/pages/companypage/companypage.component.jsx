import React from "react";

import Header from "../../components/header/header.component";
import Submenu from "../../components/submenu/submenu.component"
import Company from "../../components/company/company.component"

import "./companypage.styles.scss";

const CompanyPage = () => (
	<div className="companypage">
		<Header></Header>
		<div className="main-container">
			<div className="main-left">
				<Submenu></Submenu>
				<Company></Company>
			</div>
			<div className="main-right">

			</div>
		</div>
	</div>
);

export default CompanyPage;
