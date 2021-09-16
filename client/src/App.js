import './App.scss';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        Hello World
      </div>
      <Switch>
        {/* <Route exact path="/" component={HomePage} /> */}
        {/* <Route path="/game/:gameId" component={GamePage} /> */}
        {/* <Route path="/guide" component={GuidePage} /> */}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
