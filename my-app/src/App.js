import logo from './logo.svg';
import './App.css';
import classicModernScheme from './plants';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <h1>{classicModernScheme.map
          (
            ({ name }) => `\n${name} `
          )
          .join("")}</h1>
      </header>
    </div>
  );
}

export default App;
