import React, { Component } from 'react';
import ListItem from './ListItem';
import LineChart from './LineChart';

<style></style>;
const headingList = [];
export default class TableList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      maindataRender: this.props.headerList(),
      newHeading: this.props.headingNewList,
      value: 'All',
      renderData: this.props.renderData,
    };
  }
  handleChange = (event) => {
    var newDataArray = [];
    this.setState({ value: event.target.value });
    this.setState({ renderData: newDataArray });
    newDataArray = this.props.renderData.filter(function (el) {
      return el.revenue_type == event.target.value;
    });
    if (event.target.value == 'All') {
      this.setState({ renderData: this.props.renderData });
    } else {
      this.setState({ renderData: newDataArray });
    }
  };

  render() {
    return (
      <div>
        <select value={this.state.value} onChange={this.handleChange}>
          <option value="Revenue Type -1">Revenue Type -1</option>
          <option value="Revenue Type -3">Revenue Type -3</option>
          <option value="Revenue Type -4">Revenue Type -4</option>
          <option value="Revenue Type -5">Revenue Type -5</option>
          <option value="Revenue Type -6">Revenue Type -6</option>
          <option value="Revenue Type -7">Revenue Type -7</option>
          <option value="Revenue Type -11">Revenue Type -11</option>
          <option value="All">All</option>
        </select>

        <LineChart property={this.state.renderData} />

        <table style={{ borderSpacing: 0 }}>
          <thead>
            <tr style={{ backgroundColor: 'blue' }}>
              {this.props.headingNewList.map((data, index) => (
                <th key={data} style={{ color: '#fff' }}>
                  {data}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {this.state.renderData.map((data, index) => (
              <ListItem key={data.S_no} listItem={data} id={data.S_no} />
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
