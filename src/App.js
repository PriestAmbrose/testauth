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
        <Switch> 
        {/* switch component with options of routs */}
          <Route path="/" exact />
          <PrivateRoute path="/profile" component={Profile} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;