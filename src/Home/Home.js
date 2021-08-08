import React, { Component } from 'react';
import { Layout, Menu, Spin, Typography } from 'antd';

const { Text } = Typography;
const { Header, Content, Footer } = Layout;

export default class Home extends Component {
  render() {
    return (
      <Layout>
        <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
          <div className="logo" />
          <Menu theme="dark" mode="horizontal">
            <Menu.Item key="1">One of</Menu.Item>
            <Menu.Item key="2">These</Menu.Item>
            <Menu.Item key="3">Days I</Menu.Item>
            <Menu.Item key="4">Will make</Menu.Item>
            <Menu.Item key="5">This Better</Menu.Item>
          </Menu>
        </Header>
        <Content
          style={{ margin: '24px 16px 0', marginTop: 64, overflow: 'initial' }}
        >
          <div
            className="site-layout-background"
            style={{ padding: 220, textAlign: 'center' }}
          >
            <Spin size="large" />
            <br />
            <br />
            <br />
            <Text italic>Coming soon fam</Text>
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>~ Created by Mahdi ~</Footer>
      </Layout>
    );
  }
}
