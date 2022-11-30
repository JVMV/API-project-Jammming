import App from '../components/App/App.jsx';

const clientId = '1ac157e5ebb3462e8d26cd279d52aed0';
const redirectURI = 'http://localhost:3000/';
let aToken;
let tknExp;
const Spotify = {
    getAccessToken() {
        if(aToken) {
            return aToken;
        } else if(location.href.match(/access_token=([^&]*)/) && !aToken) {
            aToken = location.href.match(/access_token=([^&]*)/);
            aToken = aToken[1];
            tknExp = location.href.match(/expires_in=([^&]*)/);
            tknExp = tknExp[1];
            window.history.pushState('Access Token', null, '/');
        } else {
            location.href = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectURI}`;
        }
    },
    async search(term) {
        if(!aToken)
            this.getAccessToken();

        const results = await fetch(`https://api.spotify.com/v1/search?type=track&q=${term}`, {headers: {Authorization: `Bearer ${aToken}`}})
        const jsonRes = await results.json();
        console.log(App);
        return jsonRes.tracks.items;
    },
    async savePlaylist(plName, uriArr) {
        if(!plName || uriArr.length === 0)
            return;

        const accessToken = aToken;
        const authHeaders = {headers: {Authorization: `Bearer ${accessToken}`}};
        const uid = await fetch('https://api.spotify.com/v1/me', authHeaders).then(res => {
            return res.json()
        });
        const postPL = await fetch(`https://api.spotify.com/v1/users/${uid.id}/playlists`, {
            method: 'POST',
            headers: {Authorization: `Bearer ${accessToken}`},
            body: JSON.stringify({
                name: plName,
                description: 'test for Spotify API playlist endpoint'
            })
        });
        const jsonPost = await postPL.json();
        const playlistID = await jsonPost.id;
        const addTracks = await fetch(`https://api.spotify.com/v1/playlists/${playlistID}/tracks`, {
            method: 'POST',
            headers: {Authorization: `Bearer ${accessToken}`},
            body: JSON.stringify({
                uris: uriArr
            })
        }).then(res => {
            return res.json()
        })
        console.log(addTracks.snapshot_id)
        return addTracks.snapshot_id
    }
}

export default Spotify;