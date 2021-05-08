import { ResponsiveLine } from "@nivo/line";
const MyResponsiveLine = ({ nivoData /* see data tab */ }) => (
	<ResponsiveLine
		data={nivoData}
		margin={{ top: 50, right: 160, bottom: 50, left: 60 }}
		xScale={{ type: "linear" }}
		yScale={{ type: "linear", stacked: true, min: 0, max: 2500 }}
		yFormat=" >-.2f"
		curve="monotoneX"
		axisTop={null}
		axisRight={{
			tickValues: [0, 500, 1000, 1500, 2000, 2500],
			tickSize: 5,
			tickPadding: 5,
			tickRotation: 0,
			format: ".2s",
			legend: "",
			legendOffset: 0,
		}}
		axisBottom={{
			tickValues: [0, 20, 40, 60, 80, 100, 120],
			tickSize: 5,
			tickPadding: 5,
			tickRotation: 0,
			format: ".2f",
			legend: "price",
			legendOffset: 36,
			legendPosition: "middle",
		}}
		axisLeft={{
			tickValues: [0, 500, 1000, 1500, 2000, 2500],
			tickSize: 5,
			tickPadding: 5,
			tickRotation: 0,
			format: ".2s",
			legend: "volume",
			legendOffset: -40,
			legendPosition: "middle",
		}}
		enableGridX={false}
		colors={{ scheme: "spectral" }}
		lineWidth={1}
		enablePoints={false}
		pointSize={5}
		pointColor={{ theme: "background" }}
		pointBorderWidth={1}
		pointBorderColor={{ from: "serieColor" }}
		pointLabelYOffset={-12}
		useMesh={true}
		gridXValues={[0, 20, 40, 60, 80, 100, 120]}
		gridYValues={[0, 500, 1000, 1500, 2000, 2500]}
		legends={[
			{
				anchor: "bottom-right",
				direction: "column",
				justify: false,
				translateX: 140,
				translateY: 0,
				itemsSpacing: 2,
				itemDirection: "left-to-right",
				itemWidth: 80,
				itemHeight: 12,
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

export default MyResponsiveLine;
