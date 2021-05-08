const FIN_PREP_API_KEY = process.env.REACT_APP_FIN_PREP_API_KEY;
const baseURL = process.env.REACT_APP_BASE_URL;

const COMPANY_TABLE_DATA = [
	{
		id: 1,
		title: "Market Cap",
		location: "data[0].marketCap",
		apiUrl: `${baseURL}/market-capitalization/MSFT?apikey=${FIN_PREP_API_KEY}`,
	},
	{
		id: 2,
		title: "Avg. Volume",
		location: "data[0].avgVolume",
		apiUrl: `${baseURL}/quote/MSFT?apikey=${FIN_PREP_API_KEY}`,
	},
	{
		id: 3,
		title: "Cash",
		location: "data[0].cashAndCashEquivalents",
		apiUrl: `${baseURL}/balance-sheet-statement/AAPL?limit=120&apikey=${FIN_PREP_API_KEY}`,
	},
	{
		id: 4,
		title: "QEPS",
		location: "data[0].eps",
		apiUrl: `${baseURL}/income-statement/MSFT?period=quarter&limit=400&apikey=${FIN_PREP_API_KEY}`,
	},
	{
		id: 5,
		title: "Enterprise Value",
		location: "data[0].enterpriseValue",
		apiUrl: `${baseURL}/enterprise-values/MSFT?period=quarter&limit=130&apikey=${FIN_PREP_API_KEY}`,
	},
	{
		id: 6,
		title: "Div/Yeild",
		location: "data[0].dividendYielPercentageTTM",
		apiUrl: `${baseURL}/ratios-ttm/MSFT?apikey=${FIN_PREP_API_KEY}`,
	},
	{
		id: 7,
		title: "Quick Ratio",
		location: "data[0].quickRatioTTM",
		apiUrl: `${baseURL}/ratios-ttm/MSFT?apikey=${FIN_PREP_API_KEY}`,
	},
	{
		id: 8,
		title: "Current Ratio",
		location: "data[0].currentRatioTTM",
		apiUrl: `${baseURL}/ratios-ttm/MSFT?apikey=${FIN_PREP_API_KEY}`,
	},
	{
		id: 9,
		title: "PEG Ratio",
		location: "data[0].pegRatioTTM",
		apiUrl: `${baseURL}/ratios-ttm/MSFT?apikey=${FIN_PREP_API_KEY}`,
	},
	{
		id: 10,
		title: "Price/Book Ratio",
		location: "data[0].priceBookValueRatioTTM",
		apiUrl: `${baseURL}/ratios-ttm/MSFT?apikey=${FIN_PREP_API_KEY}`,
	},
	// {
	// 	id: 4,
	// 	title: "Fourth Chart",
	// 	routeName: "chart4",
	// 	apiUrl:
	// 		"https://financialmodelingprep.com/api/v3/historical-price-full/MSFT?serietype=line&apikey=7fd4e8b6bf2bceea94a8f589d648c8eb",
	// },
];

export default COMPANY_TABLE_DATA;
