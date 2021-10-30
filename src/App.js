import { BrowserRouter ,Switch,Route} from "react-router-dom";
import AddSpot from "./Component/AddSpot/AddSpot";
import AuthProvider from "./Component/AuthProvider/AuthProvider";
import BookSpot from "./Component/BookSpot/BookSpot";
import Footer from "./Component/Footer/Footer";
import Header from "./Component/Header/Header";
import Home from "./Component/Home/Home";
import Login from "./Component/Login/Login";
import ManageAllbooking from "./Component/ManageAllBooking/ManageAllbooking";
import MyTrip from "./Component/MyTrip/MyTrip";
import PrivateRoute from "./Component/PrivateRoute/PrivateRoute";


function App() {
  return (
    <div>
    <AuthProvider>
    <BrowserRouter>
        <Header></Header>
          <Switch>
              <Route exact path="/">
                  <Home></Home>
              </Route>
              <Route  path="/home">
                  <Home></Home>
              </Route>
              <Route exact path="/trip">
                 <MyTrip></MyTrip>
              </Route>
              <Route path="/login">
                  <Login></Login>
              </Route>
              <Route path="/addSpot">
                  <AddSpot></AddSpot>
              </Route>
              <Route path="/manage">
                  <ManageAllbooking></ManageAllbooking>
              </Route>
              <PrivateRoute path="/bookSpot/:id">
                  <BookSpot></BookSpot>
              </PrivateRoute>
            
          </Switch>
          <Footer></Footer>
     </BrowserRouter>
    </AuthProvider>
    </div>
  );
}

export default App;
