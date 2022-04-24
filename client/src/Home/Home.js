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
            <Menu.Item key="1">Tab</Menu.Item>
            <Menu.Item key="2">Tabi</Menu.Item>
            <Menu.Item key="3">Tab Tab</Menu.Item>
          </Menu>
        </Header>
        <Content
          style={{ margin: '24px 16px 0', marginTop: 64, overflow: 'initial' }}
        >
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <div
            className="site-layout-background"
            style={{ textAlign: 'center' }}
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
