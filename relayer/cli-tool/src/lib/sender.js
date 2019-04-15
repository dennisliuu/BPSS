const fs = require("fs");

const NetcatServer = require("netcat/server");
const nc = new NetcatServer();

const NodeRSA = require("node-rsa");
const encryptFile = require("./encryptFile");

const pdf2bs64 = (fileName) => {
  new Promise((resolve, reject) => {
    let buffer = fs.readFileSync("./src/store/" + fileName);
    let bs64 = buffer.toString('base64');
    fs.writeFile("./src/buf/send1.txt", bs64, err => {
      if (err) throw err;
      else {
        console.log("pdf complete!");
        resolve()
      }
    })
  })
}

function readTXT() {
  return new Promise(resolve => {
    setTimeout(() => {
      let data = fs.readFileSync("./src/buf/send1.txt")
      resolve(data);
    }, 2000);
  });
};


const sender = eA => {
  new Promise((resolve, reject) => {
    fs.writeFile("./src/buf/send2.txt", eA, err => {
      if (err) throw err;
      else {
        console.log("Send !");
        resolve()
      }
    })
  })
};

const main = async (orcid, fileName) => {
  await pdf2bs64(fileName);
  let paperTXT = await readTXT()
  // fs.writeFileSync('t1.txt', paperTXT)
  // let buf = await new Buffer.from(paperTXT.toString(), 'base64')
  // fs.writeFileSync('pdf.pdf', buf)

  // let eA = await encryptFile(paperTXT, "private.pem")
  let eA = await encryptFile(paperTXT, ".config/id_rsa")
  eA = orcid + '\n\n' + eA
  // console.log(eA);
  fs.writeFileSync("./src/buf/send.txt", eA)
  await sender(eA)
  nc.port(2389)
    .serve("./src/buf/send2.txt")
    .listen();
};

module.exports = main
