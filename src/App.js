import React from "react";
import { Row, Col } from "antd";

import Loading from "./components/Loading/Loading";
import ListPrices from "./components/ListPrices/ListPricesContainer";

const App = ({ loading, message, data }) => {
  return (
    <div className="app-container">
      <Row>
        <Col span={24}>
          {loading ? (
            <div className="align-center">
              <Loading />
            </div>
          ) : (
            <ListPrices data={data} />
          )}
        </Col>
      </Row>
    </div>
  );
};

export default App;
