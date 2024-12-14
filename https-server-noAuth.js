import { createServer } from "https";
import fs from "fs";
import express from "express";

const PORT = 4433;
const app = express();

app.get("/", (req, res) => {
    console.log(
        req.socket.remoteAddress
        + " " + req.method
        + " " + req.url);
    res.send("<html><body>Secure Hello World with node.js</body></html>");
});

const options = {
    key: fs.readFileSync("./keys/key.pem"),
    cert: fs.readFileSync("./keys/cert.pem")
};

const server = createServer(options, app);
server.listen(PORT, () => {
    console.log("Server started at port " + PORT);
});