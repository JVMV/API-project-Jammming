let aToken;
const Spotify = {
    getAccessToken() {
        if(aToken) {
            return aToken
        } else {
            null
        }
    }
}

export default Spotify