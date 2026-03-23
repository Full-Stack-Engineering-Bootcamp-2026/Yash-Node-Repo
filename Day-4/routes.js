const handleRequest = (req, res) => {
    if (req.method === "GET" && req.url === "/") {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(`
            <form action="/submit" method="POST">
               <label>Enter your Name :  <label/> <input name="name" />
                <textarea name="message"></textarea>
                <button type="submit">Submit</button>
            </form>
        `);
    } else if (req.method === "POST" && req.url === "/submit") {
        let body = "";

        req.on("data", chunk => body += chunk);

        req.on("end", () => {
            const params = new URLSearchParams(body);
            console.log("Name :", params.get("name"));
            console.log("Message :", params.get("message"));

            res.writeHead(302, { Location: "/" });
            res.end();
        });
    }
};

module.exports = handleRequest;