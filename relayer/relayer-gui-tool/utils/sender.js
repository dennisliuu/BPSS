const fs = require("fs");
const path = require('path');

// Netcat tool
const NetcatServer = require("netcat/server");
const nc = new NetcatServer();

// Custom lib
const encryptFile = require("./encryptFile");

// Convert pdf to base64
const pdf2bs64 = (fileName) => {
    new Promise((resolve, reject) => {
        let buffer = fs.readFileSync(fileName);
        let bs64 = buffer.toString('base64');
        fs.writeFile(path.join(__dirname, "buf/send64.txt"), bs64, err => {
            if (err) throw err;
            else {
                // $('#send_console').innerHTML += "pdf convert base64 complete!<br />"
                resolve()
            }
        })
    })
}

// Read file
function readTXT() {
    return new Promise(resolve => {
        setTimeout(() => {
            let data = fs.readFileSync(path.join(__dirname, "buf/send64.txt"))
            resolve(data);
        }, 2000);
    });
};

// Create file to send
const sender = eA => {
    new Promise((resolve, reject) => {
        fs.writeFile(path.join(__dirname, "buf/send_s.txt"), eA, err => {
            if (err) throw err;
            else {
                $('#send_console').innerText += "Send!"
                resolve()
            }
        })
    })
};

// Send file
const sender_main = async (orcid, fileName, privateKey) => {
    let ts0 = Date.now();
    await pdf2bs64(fileName);
    let paperTXT = await readTXT()
    let eA = await encryptFile(paperTXT, privateKey)
    eA = orcid + '\n\n' + eA
    fs.writeFileSync(path.join(__dirname, "buf/send_orcid.txt"), eA)
    await sender(eA)
    let ts1 = Date.now();
    $('#send_console').innerHTML += `Time: ${Math.floor((ts1 - ts0) / 1000)}s<br />`
    nc.port(2389)
        .serve(path.join(__dirname, "buf/send_s.txt"))
        .listen();
};

module.exports = sender_main