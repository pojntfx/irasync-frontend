import React, { Component } from "react";

import {
  Grid,
  Container,
  Header,
  Icon,
  Image,
  Button
} from "semantic-ui-react";

export default class HeaderCommunity extends Component {
  render() {
    return (
      <div>
        <Container>
          <Header as="h2" style={styles.header}>
            <Grid columns="two">
              <Grid.Row>
                <Grid.Column verticalAlign="middle">
                  /c/Cyberpunk
                  <Header.Subheader>High Tech, Low Life</Header.Subheader>
                </Grid.Column>
                <Grid.Column textAlign="right">
                  <Grid.Row>
                    <Grid.Column verticalAlign="middle" textAlign="right">
                      <Button
                        primary
                        fluid
                        style={{
                          maxWidth: "12rem",
                          marginBottom: "0.5rem",
                          marginLeft: "auto"
                        }}
                      >
                        <Icon name="angle double right" /> Join community
                      </Button>
                      <Button
                        fluid
                        style={{ maxWidth: "12rem", marginLeft: "auto" }}
                      >
                        <Icon name="add" /> Post
                      </Button>
                    </Grid.Column>
                  </Grid.Row>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Header>
        </Container>
      </div>
    );
  }
}

const styles = {
  header: {
    marginTop: "5rem",
    marginBottom: "5rem"
  }
};
