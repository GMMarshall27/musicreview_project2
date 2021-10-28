// cover art

// {
//     "images" : [
//         {
//             "types" : [ "Front" ],
//             "front" : true,
//             "back" : false,
//             "comment" : "",
//             "image" : "http://coverartarchive.org/...jpg",
//             "thumbnails" : {
//                 "small" : "http://coverartarchive.org/...-250.jpg",
//                 "large" : "http://coverartarchive.org/...-500.jpg"
//             },
//             "approved" : true,
//             "edit" : 123,
//             "id" : "456"
//         },
//         {
//             "types" : [ "Other" ],
//             "front" : false,
//             "back" : false,
//             "comment" : "autographed by ModBot",
//             "image" : "http://coverartarchive.org/...jpg",
//             "thumbnails" : {
//                 "250" : "http://coverartarchive.org/...-250.jpg",
//                 "500" : "http://coverartarchive.org/...-500.jpg",
//                 "1200" : "http://coverartarchive.org/...-1200.jpg",
//                 "small" : "http://coverartarchive.org/...-250.jpg",
//                 "large" : "http://coverartarchive.org/...-500.jpg"
//             },
//             "approved" : true,
//             "edit" : 124,
//             "id" : "457"
//         }
//     ],
//     "release" : "http://musicbrainz.org/release/2ba4396d-c0be-4a56-b4ea-0438306eb3be"
//   }

//https://musicbrainz.org/ws/2/
// 
// get request disc id
// get request coverart

fetch(file)
.then(x => x.image())
.then(y => myDisplay(y));

