const clientId = "0bc5f67087364e45b8351b27f456beab";
const redirect_uri = 'http://localhost:3000/';
let accessToken;

const Spotify = {
  getAccessToken() {
    if (accessToken) {
      return accessToken;
    }

    // check for access token match
    const newAccessToken = window.location.href.match(/access_token=([^&]*)/);
    const newExpiresIn = window.location.href.match(/expires_in=([^&]*)/);

    if (newAccessToken && newExpiresIn) {
      accessToken = newAccessToken[1];
      const expiresIn = Number(newExpiresIn[1]);
      // This clears the paramters, allowing us to grab a new access token when it expires
      window.setTimeout(() => (accessToken = ""), expiresIn * 1000);
      window.history.pushState("Access Token", null, "/");
      return accessToken;
    } else {
      const accessUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&scope=playlist-modify-public&show_dialog=true&redirect_uri=${redirect_uri}`;
      window.location = accessUrl;
    }
  },

  search(searchTerm) {
    const accessToken = Spotify.getAccessToken();
    const headers = {
      Authorization: `Bearer ${accessToken}`,
    };
    return fetch(
      `https://api.spotify.com/v1/search?type=track&q=${searchTerm}`,
      { headers: headers }
    )
      .then(
        (response) => {
          if (response.ok) {
            return response.json();
          }
          throw new Error("Request failed");
        },
        (err) => {
          console.log(err.message);
        }
      )
      .then((jsonResponse) => {
        console.log(jsonResponse.tracks.items[0])
        if (!jsonResponse.tracks) {
          return [];
        }
        return jsonResponse.tracks.items.map((track) => ({
          id: track.id,
          name: track.name,
          artist: track.artists[0].name,
          album: track.album.name,
          uri: track.uri,
          preview: track.preview_url

        }));
      });
    
  },
  // this method will send playlist to the users spotify account
  savePlaylist(playlistName, trackURIs) {
    if (playlistName && trackURIs.length) {
      const accessToken = Spotify.getAccessToken();
      const headers = {
        Authorization: `Bearer ${accessToken}`,
      };
      let userID;
      let playlistID;
      return fetch("https://api.spotify.com/v1/me", { headers: headers })
        .then(
          (response) => {
            if (response.ok) {
              return response.json();
            }
            throw new Error("Request failed!");
          },
          (networkError) => {
            console.log(networkError.message);
          }
        )
        .then((jsonResponse) => {
          userID = jsonResponse.id;
          return fetch(`https://api.spotify.com/v1/users/${userID}/playlists`, {
            method: "POST",
            headers: headers,
            body: JSON.stringify({ name: playlistName }),
          })
            .then(
              (response) => {
                if (response.ok) {
                  return response.json();
                }
                throw new Error("Request failed!");
              },
              (err) => {
                console.log(err.message);
              }
            )
            .then((jsonResponse) => {
              playlistID = jsonResponse.id;
              return fetch(
                `https://api.spotify.com/v1/users/${userID}/playlists/${playlistID}/tracks`,
                {
                  method: "POST",
                  headers: headers,
                  body: JSON.stringify({ uris: trackURIs }),
                }
              )
                .then(
                  (response) => {
                    if (response.ok) {
                      return response.json();
                    }
                    throw new Error("Request failed!");
                  },
                  (err) => {
                    console.log(err.message);
                  }
                )
                .then((jsonResponse) => jsonResponse);
            });
        });
    } else {
      return;
    }
  },
};

export default Spotify;
