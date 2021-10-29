import { BrowserRouter,Switch,Route } from 'react-router-dom';
import './App.css';
import AddTourOffer from './Pages/AddTourOffer/AddTourOffer';
import Header from './Pages/Header/Header';
import Home from './Pages/Home/Home';
import TourismOffer from './Pages/TourismOffer/TourismOffer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header></Header>
      <Switch>
        <Route path='/home'>
        <Home></Home>
        </Route>
        <Route path='/tourismoffer'>
        <TourismOffer></TourismOffer>
        </Route>
        <Route path='/addtouroffer'>
        <AddTourOffer></AddTourOffer>
        </Route>
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
