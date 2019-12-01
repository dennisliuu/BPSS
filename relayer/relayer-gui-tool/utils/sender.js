const fs = require("fs");
const path = require('path');

// Netcat tool
const NetcatServer = require("netcat/server");
const nc = new NetcatServer();

// Custom lib
const encryptFile = require("./encryptFile");


const pdf2bs64 = (fileName) => {
    new Promise((resolve, reject) => {
        let buffer = fs.readFileSync(fileName);
        let bs64 = buffer.toString('base64');
        fs.writeFile(path.join(__dirname, "buf/send64.txt"), bs64, err => {
            if (err) throw err;
            else {
                // console.log("pdf convert base64 complete!");
                $('#send_console').innerHTML += "pdf convert base64 complete!<br />"
                resolve()
            }
        })
    })
}

function readTXT() {
    return new Promise(resolve => {
        setTimeout(() => {
            let data = fs.readFileSync(path.join(__dirname, "buf/send64.txt"))
            resolve(data);
        }, 2000);
    });
};

const sender = eA => {
    new Promise((resolve, reject) => {
        fs.writeFile(path.join(__dirname, "buf/send_s.txt"), eA, err => {
            if (err) throw err;
            else {
                // console.log("Send !");
                $('#send_console').innerText += "Send!"
                resolve()
            }
        })
    })
};

const sender_main = async (orcid, fileName, privateKey) => {
    await pdf2bs64(fileName);
    let paperTXT = await readTXT()
    let eA = await encryptFile(paperTXT, privateKey)
    eA = orcid + '\n\n' + eA
    fs.writeFileSync(path.join(__dirname, "buf/send_orcid.txt"), eA)
    await sender(eA)
    nc.port(2389)
        .serve(path.join(__dirname, "buf/send_s.txt"))
        .listen();
};

module.exports = sender_main