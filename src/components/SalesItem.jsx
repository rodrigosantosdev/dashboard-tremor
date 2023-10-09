import {
  Bold,
  Button,
  Card,
  Divider,
  DonutChart,
  Flex,
  List,
  ListItem,
  Metric,
  Tab,
  TabGroup,
  TabList,
  Text,
  Title,
} from "@tremor/react";
import { HiOutlineChartPie, HiViewList, HiArrowRight } from "react-icons/hi";
import React, { useState } from "react";

const stocks = [
  {
    name: "Off Running AG",
    value: 10456,
    performance: "6.16%",
    deltaType: "increase",
  },
  {
    name: "Not Normal Inc.",
    value: 5056,
    performance: "1.2%",
    deltaType: "moderateDecrease",
  },
  {
    name: "Logiblaing Inc",
    value: 3421,
    performance: "3.4%",
    deltaType: "moderateDecrease",
  },
  {
    name: "Raindrop Inc",
    value: 14213,
    performance: "3.6%",
    deltaType: "decrease",
  },
  {
    name: "Brasil Inc",
    value: 9656,
    performance: "10.6%",
    deltaType: "moderateIncrease",
  },
];

const dataFormatter = (number) => {
  return "$ " + Intl.NumberFormat("us").format(number).toString();
};

function SalesItem() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <Card decoration="top" className="max-w-full mx-auto">
      <Flex className="flex-col space-x-8 lg:flex-row">
        <Title>Overview</Title>
        <TabGroup index={selectedIndex} onIndexChange={setSelectedIndex}>
          <TabList variant="solid">
            <Tab icon={HiOutlineChartPie}>Chart</Tab>
            <Tab icon={HiViewList}>List</Tab>
          </TabList>
        </TabGroup>
      </Flex>
      <Text className="mt-8">Portfolio Value</Text>
      <Metric>$ 25,46</Metric>
      <Divider />
      <Text className="mt-4">
        <Bold>Assets Allocation</Bold>
        <Text>1 Asset class - 5 Holdings</Text>
      </Text>
      {selectedIndex === 0 ? (
        <DonutChart
          data={stocks}
          valueFormatter={dataFormatter}
          showAnimation={true}
          category="value"
          index="name"
          className="mt-8"
        />
      ) : (
        <>
          <Flex className="mt-8" justifyContent="between">
            <Text className="truncate">
              <Bold>Stocks</Bold>
            </Text>
            <Text>Since transaction</Text>
          </Flex>
          <List className="mt-4">
            {stocks.map((stock) => (
              <ListItem key={stock.name}>
                <Text>{stock.name}</Text>
                <Flex className="space-x-3" justifyContent="end">
                  <Text>
                    $ {Intl.NumberFormat("BRL").format(stock.value).toString()}
                  </Text>
                </Flex>
              </ListItem>
            ))}
          </List>
        </>
      )}
      <Flex className="pt-4 mt-6 border-t border-dark-tremor-background-subtle">
        <Button
          size="xs"
          variant="light"
          icon={HiArrowRight}
          iconPosition="right"
        >
          View more
        </Button>
      </Flex>
    </Card>
  );
}

export default SalesItem;
