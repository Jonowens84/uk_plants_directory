import './App.css';
import classicModernScheme from './plant-data/plants';


function App() {
  return (
    <div className="App">

      <header className="App-header">
      <h1>A modern planting scheme</h1> 
      </header>
      
        <list>{classicModernScheme.map
          (
            ({ name }) => `\n${name},  `
          )
          .join("")}</list>
    
    </div>
  );
}

export default App;
