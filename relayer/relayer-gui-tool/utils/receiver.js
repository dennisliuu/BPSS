const fs = require("fs");
const path = require("path");

const NetcatClient = require("netcat/client");
const nc = new NetcatClient();

const receiver = async (ip) => {
    nc.addr(ip)
        .port(2389)
        .connect()
        .pipe(fs.createWriteStream(path.join(__dirname, "buf/send.txt")
};

module.exports = receiver;