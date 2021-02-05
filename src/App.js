import {BrowserRouter as Router, Route} from 'react-router-dom'

import FirstScreen from './components/FirstScreen'
import SecondScreen from './components/SecondScreen'

function App() {
  return (
    <Router>
      <Route path="/" component={FirstScreen} exact/>
      <Route path="/user/:login" component={SecondScreen}/>
    </Router>
  );
}

export default App;
