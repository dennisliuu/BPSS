const fs = require("fs");
const path = require("path");

// Netcat tool
const NetcatClient = require("netcat/client");
const nc = new NetcatClient();

const NodeRSA = require('node-rsa')

const buf2pdf = (paperTXT, filetype) => {
    new Promise((resolve, reject) => {
        let buf = new Buffer.from(paperTXT.toString(), 'base64')
        if (filetype == 'pdf') {
            fs.writeFile(path.join(__dirname, `buf/paper_${Date.now()}.pdf`), buf, err => {
                if (err) throw err;
                else {
                    // console.log("Save !");
                    $('#decode_console').innerHTML += "Save !<br />"
                    resolve()
                }
            })
        }
        else {
            fs.writeFile(path.join(__dirname, `buf/paper_${Date.now()}.txt`), buf, err => {
                if (err) throw err;
                else {
                    // console.log("Save !");
                    $('#decode_console').innerHTML += "Save !"
                    resolve()
                }
            })
        }
    })
};

function decryptFile(paperTXT, pub) {
	return new Promise(resolve => {
		var key = new NodeRSA(pub);
		let rawText = key.decryptPublic(paperTXT, 'utf8');
		resolve(rawText)
	})
}

function readTXT(fileName) {
    return new Promise(resolve => {
        // let data = fs.readFileSync("./src/buf/send.txt", "utf8")
        // resolve(data);
        setTimeout(() => {
            let data = fs.readFileSync(fileName, "utf8")
            resolve(data);
        }, 2000);
    });
};

const decode = async (fileName, publicKey, filetype) => {
    let paperTXT = await readTXT(fileName);
    let paperBody = paperTXT
        .split("\n\n")
        .slice(-1)
        .pop();
    paperBody = paperBody.toString('base64')
    paperTXT = await decryptFile(paperBody, publicKey);
    buf2pdf(paperTXT, filetype);
}

module.exports = decode