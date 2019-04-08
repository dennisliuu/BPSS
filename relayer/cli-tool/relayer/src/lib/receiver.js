const fs = require("fs");
const path = require("path");

const NetcatClient = require("netcat/client");
const nc = new NetcatClient();

const NodeRSA = require("node-rsa");
const decryptFile = require("./decryptFile");
// const updateFile = require('./updateFile')

const buf2pdf = paperTXT => {
    new Promise((resolve, reject) => {
        let buf = new Buffer.from(paperTXT.toString(), 'base64')
        fs.writeFile("./src/store/paper.pdf", buf, err => {
            if (err) throw err;
            else {
                console.log("Save !");
                resolve()
            }
        })
    })
};

function readTXT() {
    return new Promise(resolve => {
        let data = fs.readFileSync("./src/buf/send.txt", "utf8")
        resolve(data);
        // setTimeout(() => {
        //   let data = fs.readFileSync("buf/send.txt", "utf8")
        //   resolve(data);
        // }, 2000);
    });
};

const main = async (ip) => {
    nc.addr(ip)
        .port(2389)
        .connect()
        .pipe(fs.createWriteStream("./src/buf/send.txt"));
};

const decode = async () => {
    let paperTXT = await readTXT();
    // let paperTXT = await updateFile.readFile('buf/send.txt')
    // console.log(paperTXT)
    // let paperHead = paperTXT.split("\n\n")[0];
    let paperBody = paperTXT
        .split("\n\n")
        .slice(-1)
        .pop();
    paperBody = paperBody.toString('base64')
    paperTXT = await decryptFile(paperBody, "public.pem");
    buf2pdf(paperTXT);
}

module.exports = {main, decode}