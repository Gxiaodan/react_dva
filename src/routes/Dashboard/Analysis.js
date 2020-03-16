import React, { Component } from 'react';
import { connect } from 'dva';
import { Input, DatePicker } from 'antd';
import 'antd/dist/antd.css'; 

@connect(state => ({
  chart: state.chart,
}))
export default class Analysis extends Component {
  state = {}

  componentDidMount() {}

  componentWillUnmount() {
  }

  render() {
    return (
      <div>
      分析页
      <DatePicker />
      <Input />
      </div>
    );
  }
}
