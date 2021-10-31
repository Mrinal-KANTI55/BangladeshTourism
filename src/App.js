import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import AddTourOffer from './Pages/AddTourOffer/AddTourOffer';
import AllUser from './Pages/AllUser/AllUser';
import Footer from './Pages/Footer/Footer';
import Header from './Pages/Header/Header';
import Home from './Pages/Home/Home';
import LogIn from './Pages/LogIn/LogIn';
import PrivateRoute from './Pages/LogIn/PrivateRoute/PrivateRoute';
import ManageAllOffer from './Pages/ManageAllOffer/ManageAllOffer';
import NotFound from './Pages/NotFound/NotFound';
import SelectOffer from './Pages/TourismOffer/SelectOffer/SelectOffer';
import TourismOffer from './Pages/TourismOffer/TourismOffer';
import AuthProvider from './UseContext/AuthProvider';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
          <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route path='/home'>
              <Home></Home>
            </Route>
            <Route path='/tourismoffer'>
              <TourismOffer></TourismOffer>
            </Route>
            <Route path='/addtouroffer'>
              <AddTourOffer></AddTourOffer>
            </Route>
            <Route path='/login'>
              <LogIn></LogIn>
            </Route>
            <Route path='/managealloffer'>
              <ManageAllOffer></ManageAllOffer>
            </Route>
            <Route path='/alluser'>
              <AllUser></AllUser>
            </Route>
            <PrivateRoute path='/selectoffer/:offerid'>
            <SelectOffer></SelectOffer>
          </PrivateRoute>
          <Route path='*'>
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
