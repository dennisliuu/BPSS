const fs = require("fs");

const NetcatServer = require("netcat/server");
const nc = new NetcatServer();

const encryptFile = require("./encryptFile");

const pdf2bs64 = (fileName) => {
    new Promise((resolve, reject) => {
        let buffer = fs.readFileSync(document.getElementById("uploadFile").files[0].path);
        let bs64 = buffer.toString('base64');
        fs.writeFile(path.join(__dirname, "buf/send64.txt", bs64, err => {
            if (err) throw err;
            else {
                console.log("pdf convert base64 complete!");
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
                console.log("Send !");
                resolve()
            }
        })
    })
};

const sender = async (orcid, fileName) => {
    await pdf2bs64(fileName);
    let paperTXT = await readTXT()
    let eA = await encryptFile(paperTXT, "private.pem")
    eA = orcid + '\n\n' + eA
    fs.writeFileSync("./src/buf/send_orcid.txt", eA)
    await sender(eA)
    nc.port(2389)
        .serve("./src/buf/send_s.txt")
        .listen();
};

module.exports = sender