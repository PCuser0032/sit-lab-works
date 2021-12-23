var http = require("http");
var url = new URL("https://test.codesandbox.io/?name=DenisVPI31");
var name = url.searchParams.get("name");
var days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];
var day = new Date();
var nowDay = day.getDay();

http.createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    res.write(`Hello, ${name}, today is ${days[nowDay]}`);
    res.end();
  })
  .listen(8080);