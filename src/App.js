import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/styles.scss';
import NavBar from './components/NavBar';
//import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/container/ItemDetailContainer';
function App() {
  return (
    <div className="App">
      <NavBar />
      {/* <ItemListContainer greeting="Hola" />     */}
      <ItemDetailContainer />  
    </div>
  );
}

export default App;
