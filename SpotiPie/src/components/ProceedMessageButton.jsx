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

  return (
    <div className='proceed--message--container'>
        <button className='proceed--message--button' onClick={handleClick}>{props.message}</button>
        <img className="arrow--svg" src={arrow}/>
    </div>
  )
}
