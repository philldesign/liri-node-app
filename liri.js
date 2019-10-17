require("dotenv").config();

//gets keys from Spotify API
var keys = require("./keys.js");

//import axios call
const axios = require('axios');

const arg = process.argv;

//input name of artist, movie or song by user :
entertainment = ''

// –––––––––––––––––––––––––––––––––––––––––––––––––––––

//switch method applied to identify different kind of inputs and call their respective functions:
switch(arg){
  //if input is an artists:
  case "concert-this":
      concertThis(entertainment);
  break;
  //if input is a song:
  case "spotify-this-song":
    if(entertainment){
      spotifyThis(entertainment);
    } else{
      spotifyThis("The Sign, Ace of Base");
    }
  break;
  //if input is a movie:
  case "movie-this":
    if(entertainment){
      omdbData(entertainment)
    } else{
      omdbData("Mr. Nobody")
    }
  break;
  //if input is a :
  case "do-what-it-says":
    doThing();
  break;

  default:
    console.log("concert song or movie? Or Help?");
  break;
}
// –––––––––––––––––––––––––––––––––––––––––––––––––––––

//   Command #1   * concert-this * (Bands in Town API)
//         i.e.   node liri.js concert-this <artist/band name here>
// };
// var URL = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp"
// Celine Dion Example: `https://rest.bandsintown.com/artists/celine+dion/events?app_id=codingbootcamp`

function concertThis() {
axios.get(`https://rest.bandsintown.com/artists/${artist}/events?app_id=codingbootcamp`)
    .then((response) => {

      console.log(response);

    });
  }
  concertThis();

// –––––––––––––––––––––––––––––––––––––––––––––––––––––
//   Command #2   * spotify-this * (Spotify API)
//   * `spotify-this-song`

var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);  

spotify
 .request('https://api.spotify.com/v1/tracks/7yCPwWs66K8Ba5lFuU2bcx')
 .then(function(data) {
   console.log(data); 
 })
 .catch(function(err) {
   console.error('Error occurred: ' + err); 
 });

function spotifyThis() {
  
axios.get(`https://api.spotify.com/v1/search?query=tania+bowra&offset=0&limit=20&type=artist`)
    .then((response) => {
      
      console.log(response);
      
    });
  }
    spotifyThis();

// –––––––––––––––––––––––––––––––––––––––––––––––––––––

//   Command #3   * movie-this * (OMDB API)

// We then run the request with axios module on a URL with a JSON
// axios.get('http://www.omdbapi.com/?t=remember+the+titans&y=&plot=short&apikey=trilogy')
//     .then((response) => {
//     // Then we print out the imdbRating
//       console.log(response);

// –––––––––––––––––––––––––––––––––––––––––––––––––––––
