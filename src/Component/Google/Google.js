import { Fragment, React, useEffect, useState } from "react";
import { gapi } from "gapi-script";
import GoogleLogin from "react-google-login";
import Card from "../UI/Card";
import classes from "./Google.module.css";
import Home from "../Pages/Home";

const clientId =
  "87620901784-t4l2ivh4gdhlfkegl0v21kpuvi301vj7.apps.googleusercontent.com";

function Google(props) {
  const [profile, setProfile] = useState(false);

  useEffect(() => {
    const initClient = () => {
      gapi.client.init({
        clientId: clientId,
        scope: "",
      });
    };
    gapi.load("client:auth2", initClient);
  });

  const onSuccess = (res) => {
    console.log("success:", res);
    setProfile(res.profileObj);
  };

  const onFailure = (error) => {
    console.error(error);
  };

  const logoutHandler = () => {
    setProfile(false)
  }

  return (
    <>
      {profile && (
        <>
          <Home onLogout={logoutHandler} name={profile.givenName}></Home>
        </>
      )}

      {!profile && (
        <Card>
          <div className={classes.google}>
            <h1>ClothShop</h1>
            <h1> Welcome To My App </h1>
            <br></br>

            <img
              src="https://cdn1.iconfinder.com/data/icons/flat-mobile-app-icons/128/Shopping-512.png"
              alt="app logo"
            ></img>

            <p> Please Sign into your Google Account</p>
            <GoogleLogin
              clientId={clientId}
              buttonText="Login with Google"
              onSuccess={onSuccess}
              onFailure={onFailure}
              cookiePolicy={"single_host_origin"}
            />
          </div>
        </Card>
      )}
    </>
  );
}

export default Google;
