import React from 'react'
import {Auth0Context} from '../react-auth0-spa';


const Profile = ()=> {
    const {loading, user} = React.useContext(Auth0Context);  //unpacking fields from object

    if (loading || !user){
        return (
            <div> Loading...</div>
        );
    }

    return (
        <>
            <img src={user.picture} alt="Profile Picture" />
            <h2>{user.name}</h2>
            <p>{user.email}</p>
            <code>{JSON.stringify(user, null, 2)}</code>
        </>
  );
};

export default Profile;
