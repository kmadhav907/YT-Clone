import './App.css';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import SearchPage from './pages/SearchPage';

function App() {
  return (
    <div className='app'>
      <Router>
        <Switch>
          <Route path='/' component={HomePage} exact />
          <Route path='/search/:searchTerm' component={SearchPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
