import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { convertDataForNivoLineChart } from "./chart-item.utils";
import SVGNivoLineChart from "../nivo-charts/svg-nivo-line-chart.component";
// import MyResponsiveLine from "../nivo-charts/canvas-nivo-line-chart.component";

import "./chart-item.styles.scss";

const ChartItem = ({ id, apiUrl }) => {
	const [nivoChartData, setNivoChartData] = useState([]);
	const [dateRange, setDateRange] = useState(30);

	const staticApiCallAndConversionForNivoFormat = useCallback(async () => {
		const response = await axios.get(apiUrl);

		const dataConvertedForNivo = convertDataForNivoLineChart(
			response,
			dateRange,
			0
		);
		setNivoChartData(dataConvertedForNivo);
	}, [setNivoChartData, dateRange, apiUrl]);

	useEffect(() => {
		staticApiCallAndConversionForNivoFormat();
	}, [staticApiCallAndConversionForNivoFormat]);

	return (
		<div className="chart-item">
			<SVGNivoLineChart key={id} nivoData={nivoChartData} />
			{/* <MyResponsiveLine key={id} nivoData={nivoChartData} /> */}
			<div className="date-ranges">
				<div>
					<span onClick={() => setDateRange(100)}>1Y</span>
					<span onClick={() => setDateRange(90)}>3M</span>
					<span onClick={() => setDateRange(30)}>1M</span>
				</div>
			</div>
		</div>
	);
};

export default ChartItem;
