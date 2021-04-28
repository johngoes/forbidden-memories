import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import AdminCard from './pages/AdminCard';
import AdminTipo from './pages/AdminTipo';
import Header from './pages/components/Header';
import { Container, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) =>({
  offset: {
    paddingTop: 60
  }
}))

function App() {
  const classes = useStyles();

  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Header />
      <Container maxWidth="sm" className={classes.offset}>
        <Switch>
          <Route path="/admin/cards">
            <AdminCard />
          </Route>
          <Route path="/admin/cards/tipos">
            <AdminTipo />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Container>
    </Router>
  );
}

export default App;
