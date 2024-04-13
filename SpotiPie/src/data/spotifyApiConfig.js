export const authEndpoint = "https://accounts.spotify.com/authorize";


export const clientId = "670f5980caf649dfac1b4472838f14df"; //If you want to run this on your own machine, you need to register the app on Spotify website and use your own clientId
export const redirectUri = "https://spotipie.netlify.app/test"; //When testing, change to local host
export const scopes = [
    "user-top-read",
    "user-read-currently-playing",
    "user-read-playback-state",
];