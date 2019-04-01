const fs = require("fs");

const NetcatServer = require("netcat/server");
const nc = new NetcatServer();

const NodeRSA = require("node-rsa");
const encryptFile = require("../BCPtest/utils/encryptFile");

const pdf2bs64 = () => {
  new Promise((resolve, reject) => {
    let buffer = fs.readFileSync("./store/send.pdf");
    let bs64 = buffer.toString('base64');
    fs.writeFile("buf/send1.txt", bs64, err => {
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
      let data = fs.readFileSync("buf/send1.txt")
      resolve(data);
    }, 2000);
  });
};


const sender = eA => {
  new Promise((resolve, reject) => {
    fs.writeFile("buf/send2.txt", eA, err => {
      if (err) throw err;
      else {
        console.log("Send !");
        resolve()
      }
    })
  })
};

const main = async () => {
  await pdf2bs64();
  let paperTXT = await readTXT()
  // fs.writeFileSync('t1.txt', paperTXT)
  // let buf = await new Buffer.from(paperTXT.toString(), 'base64')
  // fs.writeFileSync('pdf.pdf', buf)

  let eA = await encryptFile(paperTXT, "./pem/privateA.pem")
  eA = process.argv[2] + '\n\n' + eA
  // console.log(eA);
  fs.writeFileSync("buf/send.txt", eA)
  await sender(eA)
  nc.port(2389)
    .serve("buf/send2.txt")
    .listen();
};

main();
