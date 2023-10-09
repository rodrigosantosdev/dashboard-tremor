import React from "react";
import CardItem from "./CardItem";
import AreaChartComponent from "./AreaChartComponent";
import TableComponent from "./TableComponent";

function LeftColumns() {
  return (
    <div>
      <div className="grid gap-3">
        <CardItem />
        <CardItem />
        <CardItem />
      </div>
      <div className="flex-auto w-full">
        <AreaChartComponent />
        <TableComponent />
      </div>
    </div>
  );
}

export default LeftColumns;
