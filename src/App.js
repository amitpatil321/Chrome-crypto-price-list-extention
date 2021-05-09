import React from "react";
import { Row, Col, Alert } from "antd";

import Loading from "./components/Loading/Loading";
import ListPrices from "./components/ListPrices/ListPricesContainer";

const App = ({ loading, message, data }) => {
  return (
    <div className="app-container">
      <Row>
        <Col span={24}>
          {message && (
            <Alert showIcon type={message.type} message={message.text} />
          )}
          <ListPrices data={data} loading={loading} />
          {/* {loading ? (
            <div className="align-center">
              <Loading />
            </div>
          ) : (
            <ListPrices data={data} />
          )} */}
        </Col>
      </Row>
    </div>
  );
};

export default App;
