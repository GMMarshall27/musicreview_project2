// fetch('https://musicbrainz.org/ws/2/release/f03aea17-4d32-43dd-9b29-336d4af7a373/cover-art')
//     .then(response => response.json())
//     .then(json => console.log(json));

// const https = require('https')
// const options = {
//   hostname: 'https://musicbrainz.org/release/f03aea17-4d32-43dd-9b29-336d4af7a373/cover-art',
//   port: 443,
//   path: 'https://musicbrainz.org/ws/2/',
//   method: 'GET'
// }

// const req = https.request(options, res => {
//   console.log(`statusCode: ${res.statusCode}`)

//   res.on('data', d => {
//     process.stdout.write(d)
//   })
// })

// req.on('error', error => {
//   console.error(error)
// })

// req.end()

// import {MusicBrainzApi} from '../src/musicbrainz-api';

//  // MusicBrainz bot account username & password (optional)
//  const config = {
//  botAccount: { 
//   username: 'myUserName_bot',
//   password: 'myPassword' 
// },

// // API base URL, default: 'https://musicbrainz.org' (optional)
// baseUrl: 'https://musicbrainz.org',

// appName: 'my-app',
// appVersion: '0.1.0',

// // Optional, default: no proxy server
// proxy: {
//   host: 'localhost',
//   port: 8888
//  },

// // Your e-mail address, required for submitting ISRCs
// appMail: string
// }

// const mbApi = new MusicBrainzApi(config);


// const MusicBrainzApi = require('musicbrainz-api').MusicBrainzApi;

// const mbApi = new MusicBrainzApi({
//   appName: 'my-app',
//   appVersion: '0.1.0',
//   appContactInfo: 'http://localhost:3001/'
// });

// const getData = async () => {
//     const release = await mbApi.getRelease('15fb9bdd-8fcc-4309-869a-9ec1bbc6d598', ['artists', 'url-rels']);
//     const users = await response.json()
// }


// getData();

// fetch(
//     'https://musicbrainz.org/ws/2/release/f03aea17-4d32-43dd-9b29-336d4af7a373/cover-art'
//     ).then( function (response) {
//         return response.json();
//     }
        
//     ).then( function (data) {
//         console.log(data);
//     }
//     )

// const getData = () => {$.ajax({
//     url: 'https://musicbrainz.org/ws/2/release/f03aea17-4d32-43dd-9b29-336d4af7a373/cover-art',
//     method: 'GET',
// }).then(function(response) {
//     console.log(response);
// });

// }
// getData();