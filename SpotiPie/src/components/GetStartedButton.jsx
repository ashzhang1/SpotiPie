import React from "react";
import { authEndpoint, clientId, redirectUri, scopes } from "../data/spotifyApiConfig";

export default function GetStartedButton() {
  const SPACE_PARAM = "%20";
  const SCOPES_URL_PARAM = scopes.join(SPACE_PARAM);

  function handleSpotifyLogin() {
    window.location= `${authEndpoint}?client_id=${clientId}&redirect_&redirect_uri=${redirectUri}&scope=${SCOPES_URL_PARAM}&response_type=token&show_dialog=true`;
  }

  return (
    <button className="get--started--buton" onClick={handleSpotifyLogin}>Get Started</button>
  )
}
