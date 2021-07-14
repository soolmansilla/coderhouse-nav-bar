import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/styles.scss';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting="Hola" />    
    </div>
  );
}

export default App;
