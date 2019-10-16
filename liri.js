require("dotenv").config();

var keys = require("./keys.js");
// console.log(keys)
// var spotify = new Spotify(keys.spotify);  
const axios = require('axios');
artist = ''
//   command #1   * concert-this * (Bands in Town API)
//         i.e.   node liri.js concert-this <artist/band name here>
// };
// var URL = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp"
// Celine Dion Example: `https://rest.bandsintown.com/artists/celine+dion/events?app_id=codingbootcamp`
function concertThis() {
axios.get(`https://rest.bandsintown.com/artists/${artist}/events?app_id=codingbootcamp`)
    .then((response) => {
    // Then we print out the imdbRating
      console.log(response);

    });
  }
  concertThis();

//   * `spotify-this-song`
function spotifyThis() {
  
axios.get(`https://api.spotify.com/v1/search?query=tania+bowra&offset=0&limit=20&type=artist`)
    .then((response) => {
      
      console.log(response);
      
    });
  }
    spotifyThis();
    

// We then run the request with axios module on a URL with a JSON
// axios.get('http://www.omdbapi.com/?t=remember+the+titans&y=&plot=short&apikey=trilogy')
//     .then((response) => {
//     // Then we print out the imdbRating
//       console.log(response);

 var Spotify = require('node-spotify-api');
 
var spotify = new Spotify({
  id: process.env.SPOTIFY_ID,
  secret: process.env.SPOTIFY_SECRET
});
 
spotify
  .request('https://api.spotify.com/v1/tracks/7yCPwWs66K8Ba5lFuU2bcx')
  .then(function(data) {
    console.log(data); 
  })
  .catch(function(err) {
    console.error('Error occurred: ' + err); 
  });