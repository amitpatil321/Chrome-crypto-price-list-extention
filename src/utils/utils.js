import React from "react";
import { CaretUpOutlined, CaretDownOutlined } from "@ant-design/icons";

export const getChangeInPercentage = (higher, lower) => {
  let percentage = ((higher - lower) / lower) * 100;
  return percentage.toFixed(2);
};

export const makeChangeColumn = (percentage) => {
  let color = "";
  let icon = null;
  if (percentage > 0) {
    color = "green";
    icon = <CaretUpOutlined />;
  }
  if (percentage < 0) {
    color = "red";
    icon = <CaretDownOutlined />;
  }

  // using Math.abs for converting - values to +, coz we are showing icon
  percentage = (
    <span className={color}>
      {icon}
      {Math.abs(percentage)}%
    </span>
  );

  return <div>{percentage || "NA"}</div>;
};
