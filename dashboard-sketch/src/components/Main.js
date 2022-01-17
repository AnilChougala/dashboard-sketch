import React from 'react';
import jsonData from './data.json';
import TableList from './TableList';
const mainData = jsonData;
export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      maindataRender: mainData,
      headerLIstData: [],
    };
  }

  headerList = () => {
    var headerAraay = [];
    for (const [key] of Object.entries(mainData[0])) {
      headerAraay.push(`${key}`);
    }
    this.setState({ headerLIstData: headerAraay });
  };

  render() {
    return (
      <div className="main">
        <TableList
          headerList={this.headerList}
          renderData={this.state.maindataRender}
          headingNewList={this.state.headerLIstData}
        />
      </div>
    );
  }
}
