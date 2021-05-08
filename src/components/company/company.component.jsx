import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

import "./company.styles.scss";
import Chart1 from "../../assets/chart1.png"
import Chart2 from "../../assets/chart2.png"
import Chart3 from "../../assets/chart3.png"
import Chart from "../../assets/chart.png"

const Company = () => (
	<div className="chart-container">
        <div className="company-navigation">
            <div className="chart-item">
                <img src={Chart1} alt=""/>
            </div>
            <div className="chart-item">
                <img src={Chart2} alt=""/>
            </div>
            <div className="chart-item">
                <img src={Chart3} alt=""/>
            </div>
        </div>
        <div className="company-chart">
            <h1>Microsoft Corp.</h1>
            <div className="main-chart">
                <img src={Chart} alt=""/>
            </div>
            <div className="measurement-table">
                <table>
                    <tr>
                        <th>Market Cap: <p>60.2B</p></th>
                        <th>Avg. Volume: <p>6.7M</p></th>
                        <th>Cash: </th>
                        <th>QEPS: <p>$3.4</p></th>
                        <th>Enterprise Value: <p>302B</p></th>
                    </tr>
                    <tr>
                        <th>Div/Yield: <p>1.2%</p></th>
                        <th>Quick Ratio: </th>
                        <th>Current Ratio: </th>
                        <th>PEG Ratio: </th>
                        <th>Price/Book Ratio: <p>13.3</p></th>
                    </tr>
                </table>
            </div>
        </div>
    </div>
);

export default Company;
