import React, { Component } from "react";
import { Table, Row, Col, Avatar } from "antd";
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
    return (
      <Table
        columns={columns}
        dataSource={rows}
        rowKey={(record) => record.id}
      />
    );
  }
}

export default ListPricesContainer;
