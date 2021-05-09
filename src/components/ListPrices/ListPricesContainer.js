import React, { Component } from "react";
import { Table, Row, Col, Avatar } from "antd";

import { getChangeInPercentage, makeChangeColumn } from "utils/utils";
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
                <Col span={24} className="text-light">
                  {record?.symbol}
                </Col>
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
        title: "1h %",
        dataIndex: "price",
        render: (text, record) => {
          const {
            price,
            "1h": { price_change },
          } = record;

          let percentage = getChangeInPercentage(price, price - price_change);
          return makeChangeColumn(percentage);
        },
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
          return makeChangeColumn(percentage);
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
          return makeChangeColumn(percentage);
        },
      },
      {
        title: "Market Cap",
        dataIndex: "market_cap",
        render: (text, record) =>
          "$" + Intl.NumberFormat("en-US").format(record?.market_cap),
      },
    ];

    this.setState({ rows: data, columns });
  }

  componentDidUpdate(prevProps) {
    const { loading, data } = this.props;
    if (
      prevProps.loading !== loading ||
      JSON.stringify(prevProps.data) !== JSON.stringify(data)
    ) {
      this.setState({ rows: data });
    }
  }

  render() {
    const { rows, columns } = this.state;
    const { loading } = this.props;

    return (
      <Table
        className="list-table"
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
