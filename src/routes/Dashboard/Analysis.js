import React, { Component } from 'react';
import { connect } from 'dva';
import { Input, DatePicker, Button } from 'antd';
import 'antd/dist/antd.css'; 
import Store from 'store';

@connect(state => ({
  login: state.login,
}))
export default class Analysis extends Component {
  state = {}

  componentDidMount() {}

  componentWillUnmount() {
  }
  testFun = ()=>{
    this.props.dispatch({
      type: `login/test`,
      payload: {},
    });
    // console.log("===============")
  }

  render() {
    return (
      <div>
      分析页
      <DatePicker />
      <Input />
      <Button onClick={this.testFun}>testFun</Button>
      </div>
    );
  }
}
