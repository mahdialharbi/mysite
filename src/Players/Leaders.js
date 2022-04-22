import React, { Component } from "react";
import { Layout, Card, Row, Col } from "antd";
const style = { padding: "8px 0" };

const axios = require("axios").default;

const { Header, Footer, Content } = Layout;
const { Meta } = Card;
const cardStyle = {
  width: 240,
  textAlign: "center",
};

const api = `https://api-dot-my-website-348009.wl.r.appspot.com/api/assistLeaders`;

class Leaders extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
    };
  }

  componentDidMount = () => {
    axios
      .get(api)
      .then((response) => {
        this.setState({ results: response.data.slice(0, 30) });
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  };

  render() {
    return (
      <>
        <Layout>
          <Header style={{ "font-size": "30px", textAlign: "center" }}>
            Playoff Leaders
          </Header>
          <Content>
            <Row justify="space-around" align="middle">
              {this.state.results.map((data, id) => {
                var playerImg = `https://cdn.nba.com/headshots/nba/latest/1040x760/${data[0]}.png`;
                var playerName = data[2];
                var gamesPlayed = data[4];
                var minutesAvg = data[5];
                var pts = data[22];
                var fgm = data[6];
                var fga = data[7];
                var fgPercentage = data[8];
                var fta = data[13];
                var ftPercentage = data[14];
                return (
                  <div style={style}>
                    <Col className="gutter-row" span={6}>
                      <Card
                        style={cardStyle}
                        cover={<img alt="playerName" src={playerImg} />}
                      >
                        <Meta
                          title={playerName}
                          // description="www.instagram.com"
                        />
                        <br />
                        <p>Games Played: {gamesPlayed}</p>
                        <p>PTS Avg: {pts}</p>
                        <p>Minutes Avg: {minutesAvg}</p>
                        <p>FGM: {fgm}</p>
                        <p>FGA: {fga}</p>
                        <p>FG %: {fgPercentage}</p>
                        <p>FT Attempted: {fta}</p>
                        <p>FT %: {ftPercentage}</p>
                      </Card>
                    </Col>
                  </div>
                );
              })}
            </Row>
          </Content>
          <Footer></Footer>
        </Layout>
      </>
    );
  }
}

export default Leaders;
