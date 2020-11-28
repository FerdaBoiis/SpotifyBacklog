import  SpotifyWebAPI from "spotify-web-api-node";

console.log("hi");

let scopes = ['user-read-private', 'user-read-email'];
let redirectUri = 'https://google.com';
let clientId = '727d9bc0a5504b6d81a28bbf66508df5';
let state = 'random-state';

let spotifyApi = new SpotifyWebAPI({
    redirectUri: redirectUri,
    clientId: clientId 
});

let authorizeURL = spotifyApi.createAuthorizeURL(scopes, state);
console.log(authorizeURL);