import React from "react";
import arrow from '../assets/svg/arrow.svg';
import { authEndpoint, clientId, redirectUri, scopes } from "../data/spotifyApiConfig";

export default function ProceedMessageButton(props) {
  const SPACE_PARAM = "%20";
  const SCOPES_URL_PARAM = scopes.join(SPACE_PARAM);

  const handleClick = () => {
    if (props.handleClick) {
      props.handleClick();
    } else {
      window.location= `${authEndpoint}?client_id=${clientId}&redirect_&redirect_uri=${redirectUri}&scope=${SCOPES_URL_PARAM}&response_type=token&show_dialog=true`;
    }
  };

  let message = "";
  if (props.loadingStatus === "" && props.tokenReady === "true") {
    message = "Visualise Your Data Now";
  } else if (props.loadingStatus === "loading" && props.tokenReady === "true") {
    message = "Loading...";
  } else if (props.loadingStatus === "completed" && props.tokenReady === "true") {
    message = "Scroll Down to View Your Data";
  } else if (props.tokenReady === 'false') {
    message = "Please Login to View Your Data";
  }

  return (
    <div className='proceed--message--container'>
        <button className='proceed--message--button' onClick={handleClick}>{message}</button>
        <img className="arrow--svg" src={arrow}/>
    </div>
  )
}
