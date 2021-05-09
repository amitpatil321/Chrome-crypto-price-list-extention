import React, { Component } from "react";
import { Table, Row, Col, Avatar } from "antd";

import { getChangeInPercentage } from "utils/utils";
import Loading from "components/Loading/Loading";

class ListPricesContainer extends Component {
  state = {
    columns: null,
    rows: null,
  };

  componentDidMount() {
    const { data } = this.props;
    const columns = [
      {
        title: "Name",
        dataIndex: "name",
        render: (text, record) => (
          <Row>
            <Col span={6}>
              <Avatar src={record?.logo_url} size="small" />
            </Col>
            <Col span={18}>
              <Row>
                <Col span={24}>{record?.name}</Col>
                <Col span={24}>{record?.symbol}</Col>
              </Row>
            </Col>
          </Row>
        ),
        width: "150px",
      },
      {
        title: "Price",
        dataIndex: "price",
        render: (text, record) =>
          "$" + Intl.NumberFormat("en-US").format(record?.price),
      },
      {
        title: "24h %",
        dataIndex: "price",
        render: (text, record) => {
          const {
            price,
            "1d": { price_change },
          } = record;

          let percentage = getChangeInPercentage(price, price - price_change);
          let color = "";
          if (percentage > 0) color = "green";
          if (percentage < 0) color = "red";

          percentage = <span className={color}>{percentage}%</span>;

          return <div>{percentage || "NA"}</div>;
        },
      },
      {
        title: "7d %",
        dataIndex: "price",
        render: (text, record) => {
          const {
            price,
            "7d": { price_change },
          } = record;

          let percentage = getChangeInPercentage(price, price - price_change);
          let color = "";
          if (percentage > 0) color = "green";
          if (percentage < 0) color = "red";

          percentage = <span className={color}>{percentage}%</span>;

          return <div>{percentage || "NA"}</div>;
        },
      },
      //   {
      //     title: "24H",
      //     dataIndex: "price",
      //   },
      //   {
      //     title: "1D",
      //     dataIndex: "price",
      //   },
      {
        title: "Market Cap",
        dataIndex: "market_cap",
        render: (text, record) =>
          "$" + Intl.NumberFormat("en-US").format(record?.market_cap),
      },
    ];

    this.setState({ rows: data, columns });
  }
  render() {
    const { rows, columns } = this.state;
    const { loading } = this.props;
    return (
      <Table
        columns={columns}
        dataSource={rows}
        size="small"
        bordered={false}
        loading={loading && { indicator: <Loading /> }}
        rowKey={(record) => record.id}
      />
    );
  }
}

export default ListPricesContainer;
