import React from 'react';
import NavBar from './components/navbar';
import { Auth0Context} from './react-auth0-spa';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Profile from './components/profile';
import PrivateRoute from './components/PrivateRoute'

function App() {
  const { loading } = React.useContext(Auth0Context);  //unpacking fields from object

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="App">
      <BrowserRouter>
        <header>
          <NavBar />
        </header>
        <Switch> {/* switch component with options of routs
        Renders the first child <Route> or <Redirect> that matches the location. */}

          <Route path="/" exact /> 
          {/* exact keyword makes sure it only goes to that route in that instance
           without it /profile is not going to load
          */}
          <PrivateRoute path="/profile" component={Profile} />
          
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;