import './assets/css/style.css';
import './assets/css/header.css';
import './assets/css/login.css';

import Header from './shared/components/header';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          <Header />
        </p>
      </header>
    </div>
  );
}

export default App;
