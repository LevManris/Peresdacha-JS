import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ProductsList from './ProductsList';
import ProductDetail from './ProductDetail';

const NotFoundPage = () => (
  <div>
    <h2>Страница не найдена</h2>
    <p>К сожалению, запрашиваемая страница не существует.</p>
  </div>
);

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/products" component={ProductsList} />
      <Route path="/product/:id" component={ProductDetail} />
      <Route path="*" component={NotFoundPage} />
    </Switch>
  </Router>
);

export default App;
