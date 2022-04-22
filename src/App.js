import './App.css';
import { BrowserRouter, Route,Switch} from "react-router-dom";
import contactform from './components/contactform';
import store from './Store';
import { Provider } from "react-redux";


function App() {
  return (
    <>
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={contactform}   />
          
        </Switch>
      </BrowserRouter>
    </Provider>
    </>  
  );
}

export default App;
