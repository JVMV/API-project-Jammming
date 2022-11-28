const clientId = '1ac157e5ebb3462e8d26cd279d52aed0';
const redirectURI = 'http://localhost:3000/';
let aToken;
let tknExp;
const Spotify = {
    getAccessToken() {
        if(aToken) {
            return aToken
        } else if(window.location.href.match(/access_token=([^&]*)/)) {
            aToken = window.location.href.match(/access_token=([^&]*)/);
            tknExp = window.location.href.match(/expires_in=([^&]*)/);
            window.setTimeout(() => aToken = '', tknExp * 1000);
            window.history.pushState('Access Token', null, '/');
            window.location = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectURI}`;
        }
    },
    async search(term) {
        const results = await fetch(`https://api.spotify.com/v1/search?type=track&q=${term}`);
        return results
    }
}

export default Spotify