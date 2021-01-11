import React from 'react';
import NavBar from './components/navbar'
import {useAuth0} from './react-auth0-spa'

function App() {
  const {loading} = useAuth0();

  if(loading){
    return <div> Loading...</div>
  }
}
export default App;
