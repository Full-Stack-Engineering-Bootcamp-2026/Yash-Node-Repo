const http = require("http");

const about = `<body><h1>Welcome to my application</h1><h2> <a href="/about">Navigate to About</a></h2></body>`;
const name = "<h3>My name is Yash Kalange and I am working at Mindbowser</h3>";
const notFound = "<h1>404 - Incorrect path check your path</h1>";

const server = http.createServer((req, res) => {
  const { url, method } = req;
  console.log(url);
  console.log(method);

  res.setHeader("Content-Type", "text/html");
  if (url === "/") {
    res.write(`${about}`);
    return res.end();
  } else if (url === "/about") {
    res.write(`${name}`);
  } else if (url == "/redirect") {
    res.writeHead(302, {
      Location: "/",
    });
    return res.end();
  } else if (url == "/time") {
    return res.end(JSON.stringify({ Time: new Date().toLocaleTimeString() }));
  } else {
    res.write(`${notFound}`);
  }

  if (method == "POST") {
    if (url == "/") {
      console.log(res);
      res.write(JSON.stringify({ method: "POST" }));
      res.end()
    }
  }
});

server.listen(7007, () => {
  console.log("Server running on 7007");
});
