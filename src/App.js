import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/styles.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/container/ItemDetailContainer";

function App() {

  const categories = [
    { id: 'asfadd', address: '/', text: 'TODOS LOS PRODUCTOS' },
    { id: '123asf', address: '/category/A', text: 'CATEGORIA A' },
    { id: 'sgs3q3', address: '/category/B', text: 'CATEGORIA B' },
    { id: 'gkl98s', address: '/category/C', text: 'CATEGORIA C' }
  ];


  return (



    <Router> 
        <NavBar />
        <Switch>
          <Route exact path="/detail" component={ItemDetailContainer} />
           <Route exact path="/category/:categoryId">
            <ItemListContainer />
          </Route> 
        </Switch>

        {/* <ItemDetailContainer /> */}
    
    </Router>
  );
}

export default App;
