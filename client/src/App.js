import './App.scss';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import GamePage from './pages/GamePage/GamePage';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/game/:gameId" component={GamePage} />
        {/* <Route path="/guide" component={GuidePage} /> */}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
