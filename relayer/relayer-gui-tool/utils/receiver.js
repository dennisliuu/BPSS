const fs = require("fs");
const path = require("path");

const NetcatClient = require("netcat/client");
const nc = new NetcatClient();

const receiver = async (ip) => {
    let ts0 = Date.now();
    await nc.addr(ip)
        .port(2389)
        .connect()
        .pipe(fs.createWriteStream(path.join(__dirname, "buf/receive.txt")))
        .pipe($("#rec_console").innerText += "Save!")
};

module.exports = receiver;