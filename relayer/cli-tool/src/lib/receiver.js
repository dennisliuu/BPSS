const fs = require("fs");
const path = require("path");

const NetcatClient = require("netcat/client");
const nc = new NetcatClient();

const decryptFile = require("./decryptFile");

const buf2pdf = paperTXT => {
    new Promise((resolve, reject) => {
        let buf = new Buffer.from(paperTXT.toString(), 'base64')
        fs.writeFile(`./src/store/paper_${Date.now()}.pdf`, buf, err => {
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
        // let data = fs.readFileSync("./src/buf/send.txt", "utf8")
        // resolve(data);
        setTimeout(() => {
            let data = fs.readFileSync("./src/buf/send.txt", "utf8")
            resolve(data);
        }, 2000);
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
    let paperBody = paperTXT
        .split("\n\n")
        .slice(-1)
        .pop();
    paperBody = paperBody.toString('base64')
    paperTXT = await decryptFile(paperBody, "public.pem");
    buf2pdf(paperTXT);
}

module.exports = { main, decode }
