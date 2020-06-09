import React from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, BarChart, Bar 
} from 'recharts';
import { Row, Col } from 'react-bootstrap';

const data = [
  {
    name: 'Jan', income: 522, 
  },
  {
    name: 'Feb', income: 400, 
  },
  {
    name: 'Mar', income: 200, 
  },
  {
    name: 'Apr', income: 600,
  },
  {
    name: 'May', income: 1200, 
  },
  {
    name: 'Jun', income: 1354, 
  },
  {
    name: 'Jul', income: 2045, 
  },
  {
    name: 'Aug', income: 3490, 
  },
  {
    name: 'Sep', income: 6570, 
  },
  {
    name: 'Oct', income: 5242,
  },
  {
    name: 'Nov', income: 6544, 
  },
  {
    name: 'Dec', income: 7526, 
  },
];
const data2 = [
  {
    name: 'Amazon', clicks: 120551, openedRef: 51521,
  },
  {
    name: 'IG', clicks: 522145, openedRef: 125463, 
  },
  {
    name: 'Kraken', clicks: 25565, openedRef: 12332, 
  },
  {
    name: 'CoinBase', clicks: 3401, openedRef: 1250, 
  },
  {
    name: 'Aliexpress', clicks: 54022, openedRef: 25668,
  },
];


const Chart = () =>  {
  return (
    <Row>
      <Col sm>
    <LineChart
    width={500}
    height={300}
    data={data}
    margin={{
      top: 4, right: 30, left: 20, bottom: 5,
    }}
  >
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis dataKey="name" />
    <YAxis />
    <Tooltip />
    <Legend />
    <Line type="monotone" dataKey="income" stroke="#FF8042" />
  </LineChart>
  </Col>
  <Col sm>
    <BarChart
        width={500}
        height={300}
        data={data2}
        margin={{
          top: 5, right: 30, left: 20, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="clicks" fill="#0088FE" />
        <Bar dataKey="openedRef" fill="#FF8042" />
      </BarChart>
      </Col>
      </Row>
  )
}

export default Chart;