import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './pages/home';
import News from './pages/news';
import TrendingTopics from './helpers/trendingTopics';
import NavBar from './helpers/navbar';
import Footer from './helpers/footer';

export default function App() {
    return (
      <div className="app">
        <TrendingTopics />
        <NavBar />
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/news" component={News} />
          </Switch>
        </Router>
        <Footer />
      </div>
    );
}