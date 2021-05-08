import React, { useCallback, useState, useEffect } from "react";
import {
  convertNumberToAbbreviation,
  appendPrefixOrSuffix,
} from "./table-cell.utils";

import _ from "lodash";

import axios from "axios";

import "./table-cell.styles.scss";

const TableCell = ({ id, title, location, apiUrl }) => {
  const decimalDigits = 2;
  const [cellData, setCellData] = useState([]);

  const callCellDataApi = useCallback(async () => {
    try {
      const response = await axios.get(apiUrl);

      var dataPoint = _.get(response, location, null);

      if (dataPoint) {
        if (dataPoint > 1000) {
          dataPoint = convertNumberToAbbreviation(dataPoint);
        } else {
          dataPoint =
            Math.trunc(dataPoint * Math.pow(10, decimalDigits)) /
            Math.pow(10, decimalDigits);
        }

        dataPoint = appendPrefixOrSuffix(dataPoint, title);
      } else {
        dataPoint = "(Something went wrong)";
      }

      setCellData(dataPoint);
    } catch (err) {
      setCellData(`(Err Code: ${err.response.status})`);
    }
  }, [apiUrl, location]);

  useEffect(() => {
    callCellDataApi();
  }, [callCellDataApi]);

  return (
    <div className="table-cell">
      {title}: {cellData}
    </div>
  );
};

export default TableCell;
