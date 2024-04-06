// apiEndpoints.js
export const spotifyEndpoints = {
    userProfile: "https://api.spotify.com/v1/me",
    topArtists: "https://api.spotify.com/v1/me/top/artists",
    topSongs: "https://api.spotify.com/v1/me/top/tracks",
    songFeatures: "https://api.spotify.com/v1/audio-features/{id}",
    recommendations: "https://api.spotify.com/v1/recommendations?limit=5&seed_artists="
  };
  