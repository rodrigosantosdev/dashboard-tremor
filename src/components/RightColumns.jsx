import React from "react";
import SalesItem from "./SalesItem";
import WebAnalyticComponent from "./WebAnalyticComponent";
import ScoreList from "./ScoreList";

function RightColumns() {
  return (
    <>
      <SalesItem />
      <WebAnalyticComponent />
      <ScoreList />
    </>
  );
}

export default RightColumns;
