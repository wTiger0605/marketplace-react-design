import React from "react";

import Header from "../../components/header/header-landing.component";
import Footer from "../../components/footer/footer-landing.component"
import Main from "../../components/main/main.component"

import "./homepage.styles.scss";

const HomePage = () => (
	<div className="homepage">
		<Header></Header>
		<Main></Main>
		<Footer></Footer>
	</div>
);

export default HomePage;
