// Import the url module from Node.js
const url = require('url');

// Parse an URL string into its segments
const myURL = url.parse("http://localhost:8080/default.htm?year=2017&month=february", true);

console.log(myURL);

console.log(myURL.query.year);
