import  SpotifyWebAPI from "spotify-web-api-node";
import axios from 'axios';
import url from 'url';
import keytar from 'keytar';
import os from 'os';

import envVariables from '../runtime/env-variables.json';
import { access } from "fs";

const { clientId } = envVariables;
const redirectURI = "http://localhost/spotifybacklogredirect";
const keytarService = "electron-spotify-backlog";
const keytarAccount = os.userInfo().username;

let accessToken: string = null;
let refreshToken: string = null;
let state: string = null;

function getAccessToken(): string {
    return accessToken;
}

function getAuthenticationURL(): string {
    setState();
    let scopes = ['user-read-private', 'user-read-email']; 
    
    let spotifyApi = new SpotifyWebAPI({
        redirectUri: redirectURI,
        clientId: clientId 
    });
    
    return spotifyApi.createAuthorizeURL(scopes, state); 
}

//TODO properly set this
function setState() {
    state = "random-state";
}

function validateState(responseState : string) {
    return responseState === state;
}

export default getAuthenticationURL;