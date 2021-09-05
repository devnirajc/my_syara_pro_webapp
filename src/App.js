import './assets/css/style.css';
import './assets/css/header.css';
import './assets/css/login.css';
import './assets/css/responsive.css';

import Home from './containers/home';
import Subscription from './containers/subscription';

function App() {
  return (
    <div className="App">
      <Home/>
      <Subscription />
    </div>
  );
}

export default App;
