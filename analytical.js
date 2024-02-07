var url = require('url');
//var adr = 'http://localhost:8080/default.htm?year=2017&month=february';
var adr= 'http://www.blah.com/some/crazy/path.html?param1=foo&param2=bar';
var q = url.parse(adr, true);

console.log("host=",q.host); //returns 'localhost:8080'
console.log("pathname=",q.pathname); //returns '/default.htm'
console.log("search=",q.search); //returns '?year=2017&month=february'

var qdata = q.query; //returns an object: { year: 2017, month: 'february' }
console.log(qdata.param1); //returns 'february'