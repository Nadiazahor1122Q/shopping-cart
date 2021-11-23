
import './App.css';
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
 import { BrowserRouter, Route} from 'react-router-dom';
 import { Switch, Redirect } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Cart from './components/Cart';
import  NotFound  from './components/NotFound';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <ToastContainer />
      <NavBar />
      <div className="content-container">
        <Switch>
          <Route path="/cart" component={Cart} />
          <Route path="/not-found" component={NotFound} />
          <Route path="/" exact component={Home} />
          <Redirect to="/not-found" />
        </Switch>
      </div>
    </BrowserRouter>
  </div>
  );
}

export default App;
