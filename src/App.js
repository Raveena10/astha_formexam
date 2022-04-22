import './App.css';
import { BrowserRouter, Route,Switch} from "react-router-dom";
import contactform from './components/contactform';
import store from './Store';
import { Provider } from "react-redux";
import ShowContact from './components/ContactList';


function App() {
  return (
    <>
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route path="/contactform" exact component={contactform}   />
          <Route path="/ShowContact" exact component={ShowContact}/>
          <Route path="/edit/:id" exact component={contactform}/>
        </Switch>
      </BrowserRouter>
    </Provider>
    </>  
  );
}

export default App;
