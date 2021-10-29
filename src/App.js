import { BrowserRouter ,Switch,Route} from "react-router-dom";
import Header from "./Component/Header/Header";
import Home from "./Component/Home/Home";


function App() {
  return (
    <div>
     <BrowserRouter>
        <Header></Header>
          <Switch>
              <Route path="/">
                  <Home></Home>
              </Route>
          </Switch>
     </BrowserRouter>
    </div>
  );
}

export default App;
