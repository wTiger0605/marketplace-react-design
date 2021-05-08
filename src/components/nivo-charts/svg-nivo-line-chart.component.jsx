import React from "react";

import { ResponsiveLine } from "@nivo/line";

import "./svg-nivo-line-chart.styles.scss";

const SVGNivoLineChart = ({ nivoData }) => {
	return (
		<ResponsiveLine
			data={nivoData}
			margin={{ top: 0, right: 70, bottom: 40, left: 50 }}
			xScale={{ type: "point" }}
			yScale={{
				type: "linear",
				min: "auto",
				max: "auto",
				stacked: true,
				reverse: false,
			}}
			theme={{
				axis: {
					ticks: {
						text: {
							fontSize: 7,
						},
					},
				},
			}}
			yFormat=" >-.2f"
			axisTop={null}
			axisRight={null}
			axisBottom={{
				orient: "bottom",
				tickSize: 3,
				tickPadding: 5,
				tickRotation: 67,
				legend: "Time",
				legendOffset: 36,
				legendPosition: "middle",
			}}
			axisLeft={{
				orient: "left",
				tickSize: 3,
				tickPadding: 5,
				tickRotation: 0,
				legend: "Price",
				legendOffset: -40,
				legendPosition: "middle",
			}}
			pointSize={1}
			pointColor={{ theme: "background" }}
			pointBorderWidth={2}
			pointBorderColor={{ from: "serieColor" }}
			pointLabelYOffset={-12}
			enableArea={true}
			areaBlendMode="multiply"
			areaOpacity={0.05}
			useMesh={true}
			legends={[
				{
					anchor: "bottom-right",
					direction: "column",
					justify: false,
					translateX: 100,
					translateY: 0,
					itemsSpacing: 0,
					itemDirection: "left-to-right",
					itemWidth: 80,
					itemHeight: 20,
					itemOpacity: 0.75,
					symbolSize: 12,
					symbolShape: "circle",
					symbolBorderColor: "rgba(0, 0, 0, .5)",
					effects: [
						{
							on: "hover",
							style: {
								itemBackground: "rgba(0, 0, 0, .03)",
								itemOpacity: 1,
							},
						},
					],
				},
			]}
		/>
	);
};

export default SVGNivoLineChart;
