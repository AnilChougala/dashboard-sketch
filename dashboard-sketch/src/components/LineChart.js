import React, { Component } from 'react';
import {
  LineChart,
  ResponsiveContainer,
  Legend,
  Tooltip,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
} from 'recharts';

const pdata = [];
export default class ListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data1: this.props.property,
    };
  }
  render() {
    return (
      <div>
        <h1 className="text-heading">Line Chart Using Rechart</h1>
        <ResponsiveContainer width="100%" aspect={3}>
          <LineChart data={this.state.data1} margin={{ right: 300 }}>
            <CartesianGrid />
            <XAxis dataKey="month" interval={'preserveStartEnd'} />
            <YAxis></YAxis>
            <Legend />
            <Tooltip />
            <Line dataKey="acv" stroke="black" activeDot={{ r: 8 }} />
            <Line dataKey="tcv" stroke="red" activeDot={{ r: 8 }} />
            <Line dataKey="revenue" stroke="blue" activeDot={{ r: 8 }} />
            <Line dataKey="product" stroke="yellow" activeDot={{ r: 8 }} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    );
  }
}
