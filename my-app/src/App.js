import "./App.css";
import classicModernScheme from "./plant-data/plants";
import grass from "./plant-data/images/grass.png";
import buxus from "./plant-data/images/buxus.png";
let names = classicModernScheme.map(({ name }) => `${name} `).join("");
console.log(names);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>A modern planting scheme</h1>
      </header>
<div>
      <list>{classicModernScheme.map(({ name }) => `${name}, `).join("")}</list>
      </div> 
      <br></br>
      <div>
      <img className="miscanthus" src={grass} alt="miscanthus sinensis" />
        <img className="buxus" src={buxus} alt="round buxus ball" />
        <img className="buxus2" src={buxus} alt="round buxus ball" />
      </div>
      </div>
    
  );
}

export default App;
