/*global chrome*/

import React, { Component } from "react";

import App from "./App";
import "./App.css";
import "antd/dist/antd.css";

let lastWeekDate = new Date();
const dateFrom = new Date(
  lastWeekDate.setDate(lastWeekDate.getDate() - 7)
).toISOString();
const dateTo = new Date(Date.now()).toISOString();

class AppContainer extends Component {
  state = {
    loading: false,
    message: null,
    data: null,
    apiKey: "90d182b28d819a335663f67a5707be33",
    targetCurrency: "USD",
    ids: ["BTC", "DOGE", "ETH", "XRP"],
    dateFrom: dateFrom,
    dateTo: dateTo,
  };

  async componentDidMount() {
    const { apiKey, ids, dateFrom, dateTo, targetCurrency } = this.state;
    this.setState({ loading: true });

    console.log(
      `https://api.nomics.com/v1/currencies/ticker?key=${apiKey}&ids=${ids.join(
        ","
      )}&convert=${targetCurrency}&start=${dateFrom}&end=${dateTo}&interval=1h,1d,7d&per-page=100&page=1`
    );

    chrome.runtime.sendMessage(
      {
        message: "fetch_prices",
        url: `https://api.nomics.com/v1/currencies/ticker?key=${apiKey}&ids=${ids.join(
          ","
        )}&convert=${targetCurrency}&start=${dateFrom}&end=${dateTo}&interval=1h,1d,7d&per-page=100&page=1`,
      },
      (response) => {
        if (response?.length) {
          this.setState({
            loading: false,
            message: null,
            data: response,
          });
        } else {
          this.setState({
            loading: false,
            message: { type: "error", text: "Error fetching data" },
            data: null,
          });
        }
      }
    );
  }

  render() {
    const { loading, message, data } = this.state;
    return <App loading={loading} message={message} data={data} />;
  }
}

export default AppContainer;
