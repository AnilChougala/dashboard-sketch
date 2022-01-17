import React, { Component } from 'react';

export default class ListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.listItem,
    };
  }
  render() {
    return (
      <tr>
        <td>{this.state.data.S_no}</td>
        <td>{this.state.data.line_of_business}</td>
        <td>{this.state.data.revenue_type}</td>
        <td>{this.state.data.product}</td>
        <td>{this.state.data.year}</td>
        <td>{this.state.data.month}</td>
        <td>{this.state.data.acv}</td>
        <td>{this.state.data.tcv}</td>
        <td>{this.state.data.revenue}</td>
      </tr>
    );
  }
}
