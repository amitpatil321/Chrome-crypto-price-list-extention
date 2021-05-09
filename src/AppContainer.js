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

    chrome.runtime.sendMessage(
      {
        message: "fetch_prices",
        url: `https://api.nomics.com/v1/currencies/ticker?key=${apiKey}&ids=${ids.join(
          ","
        )}&convert=${targetCurrency}&start=${dateFrom}&end=${dateTo}per-page=100&page=1`,
      },
      (response) => {
<<<<<<< HEAD
        console.log("added conditional chaining!");
=======
>>>>>>> d63f3089bfb3eb85a5e51d2200d457b3570c3879
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
<<<<<<< HEAD
=======
    // const response = await axios.get(
    //   `https://api.nomics.com/v1/currencies/ticker?key=${apiKey}&ids=${ids.join(
    //     ","
    //   )}&convert=${targetCurrency}&start=${dateFrom}&end=${dateTo}per-page=100&page=1`
    // );

    // if (response?.status === 200) {
    //   this.setState({ loading: false, message: null, data: response?.data });
    // } else {
    //   this.setState({
    //     loading: false,
    //     message: { type: "error", text: "Error fetching data" },
    //     data: null,
    //   });
    // }
>>>>>>> d63f3089bfb3eb85a5e51d2200d457b3570c3879
  }

  render() {
    const { loading, message, data } = this.state;
    return <App loading={loading} message={message} data={data} />;
  }
}

export default AppContainer;
