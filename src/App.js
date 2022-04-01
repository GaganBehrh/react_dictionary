import logo from './logo.png';
import "./App.css";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="img-logo" alt="Shecodes logo" />
        <form className="searchengine">
          <input className='inputbox' type="search" />
         
        </form>
        <footer>
          Coded by Gagi Behrh
        </footer>
      </header>
    </div>
  );
}

export default App;
