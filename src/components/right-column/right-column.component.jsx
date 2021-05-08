import React, { useCallback, useEffect, useState } from "react";
import axios from "axios";

import "./right-column.styles.scss";
import NewsFeedTable from "../news-feed-table/news-feed-table.component";

const RightColumn = () => {
  const [responseState, setResponseState] = useState([]);
  const { REACT_APP_BASE_URL, REACT_APP_FIN_PREP_API_KEY } = process.env;
  const apiUrl = `${REACT_APP_BASE_URL}/stock_news?tickers=MSFT&limit=10&apikey=${REACT_APP_FIN_PREP_API_KEY}`;

  const callNewsfeedApi = useCallback(async () => {
    try {
      const response = await axios.get(apiUrl);
      setResponseState(response.data);
    } catch (err) {
      setResponseState([]);
    }
  }, [apiUrl]);

  useEffect(() => {
    callNewsfeedApi();
  }, [callNewsfeedApi]);

  return (
    <div className="right-column">
      Right
      <NewsFeedTable feeds={responseState}></NewsFeedTable>
    </div>
  );
};

export default RightColumn;
