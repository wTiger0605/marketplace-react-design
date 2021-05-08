import React from "react";
import MULTI_CHART_DATA from "./multi-chart.data";
import ChartItem from "../chart-item/chart-item.component";

import "./chart-directory.styles.scss";

const ChartDirectory = () => {
	return (
		<div className="chart-directory">
			{MULTI_CHART_DATA.map((chartN) => (
				<ChartItem key={chartN.id} {...chartN} />
			))}
		</div>
	);
};

export default ChartDirectory;
