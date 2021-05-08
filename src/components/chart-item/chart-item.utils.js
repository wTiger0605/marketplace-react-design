export function convertDataForNivoLineChart(response, dataEnd, dataStart) {
	const newHistorical = response.data.historical.map((e) => ({
		x: e.date.slice(5),
		y: e.close,
	}));

	//converting api response into the format needed by nivo charts
	const dataConvertedForNivoLineChart = [
		{
			id: response.data.symbol,
			color: "hsl(90, 70%, 50%)",
			data: newHistorical.slice(dataStart, dataEnd).reverse(),
		},
	];

	return dataConvertedForNivoLineChart;
}
