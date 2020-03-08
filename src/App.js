import React from 'react';
import TitleBar from './TitleBar'
import Card from './Card'
import Grid from '@material-ui/core/Grid'
import './index.css'

function App() {
  return (
    <div className="App">
      <TitleBar/>
      <Grid item xs={12} md={4} lg={3}>
        <Card/>
      </Grid>
    </div>
  );
}

export default App;