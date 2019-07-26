import React, { Component } from "react";
import SongList from "./SongList";
import { Container, Grid, GridRow, GridColumn } from "semantic-ui-react";
import SongDetail from "./SongDetail";

class App extends Component {
  render() {
    return (
      <Container>
        <Grid>
          <GridRow columns={2}>
            <GridColumn>
              <SongList />
            </GridColumn>
            <GridColumn>
              <SongDetail />
            </GridColumn>
          </GridRow>
        </Grid>
      </Container>
    );
  }
}

export default App;
