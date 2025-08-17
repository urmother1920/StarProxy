import React from 'react';
import { Route, Router } from 'wouter';
import Home from './pages/Home';

const App: React.FC = () => {
  return (
    <Router>
      <Route path="/" component={Home} />
    </Router>
  );
};

export default App;