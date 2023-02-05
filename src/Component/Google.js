import { React, useEffect, useState } from "react";
import { gapi } from "gapi-script";
import GoogleLogin from "react-google-login";
import TodoItem from "./Input/TodoItem";
import Card from "./UI/Card";
import classes from "./Google.module.css";
import Button from "./UI/Button";

const clientId =
  "1018055346634-69m89sl2kgajlg79u5k7rd5q4v810vf0.apps.googleusercontent.com";

function Google() {
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
    setProfile(res.profileObj);
  };

  const onFailure = (error) => {
    console.error(error);
  };

  const logoutHandler = () => {
    setProfile(false);
  };

  return (
    <>
      <Card>
        {profile && (
          <>
            <div className={classes.logout}>
              <Button onClick={logoutHandler}>Log Out</Button>
            </div>
            <div className={classes.logged}>
              <p> Hey, {profile.name}, What's Your Today's Task ?</p>
              <br></br>
              <TodoItem />
            </div>
          </>
        )}

        {!profile && (
          <div className={classes.google}>
            <h2> Todo </h2>
            <h2> Welcome To My App</h2>
            <br></br>
            <img src="https://shrtco.de/pydT6" alt="logo"></img>
            <p> Please Sign into your Google Account</p>

            <GoogleLogin
              clientId="1018055346634-69m89sl2kgajlg79u5k7rd5q4v810vf0.apps.googleusercontent.com"
              buttonText="Login with Google"
              onSuccess={onSuccess}
              onFailure={onFailure}
              cookiePolicy={"single_host_origin"}
            />
          </div>
        )}
      </Card>
    </>
  );
}

export default Google;
