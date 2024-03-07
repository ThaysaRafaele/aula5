import logo from './logo.svg';
import './App.css';
import List from './Components/List'
import Button from './Components/Button';
import Lista from './Components/ListaAnterior';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button />

        <div>
          <Lista />
        </div>
      </header>
    </div>
  );
}

export default App;
