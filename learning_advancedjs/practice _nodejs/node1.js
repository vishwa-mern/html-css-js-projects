const http = require("http");

const server = http.createServer((req, res) => {

  if (req.url === "/" && req.method === "GET") {

    // ⭐ IMPORTANT LINE
    res.setHeader("Content-Type", "text/html");

    res.end(`
      <h2>Home Page</h2>
      <form action="/about" method="POST">
        <button type="submit">POST bhejo</button>
      </form>
    `);
  } 
  else if (req.url === "/about" && req.method === "POST") {
    res.end("about page");
    console.log("about page visited");
  } 
  else {
    res.end("404 page"); 
  }
})
server.listen(4000);
