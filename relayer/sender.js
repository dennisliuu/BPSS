const fs = require("fs");

const NetcatServer = require("netcat/server");
const nc = new NetcatServer();

const NodeRSA = require("node-rsa");
const encryptFile = require("../BCPtest/utils/encryptFile");

const pdf2bs64 = () => {
  let buffer = fs.readFileSync("./store/send.pdf");
  let bs64 = buffer.toString('base64');
  fs.writeFile("buf/send1.txt", bs64, err => {
    if (err) throw err;
    console.log("pdf complete!");
  });
};

function readTXT () {
  return new Promise(resolve => {
    setTimeout(() => {
      let data = fs.readFileSync("buf/send1.txt")
      resolve(data);
    }, 2000);
  });
};


const sender = eA => {
  fs.writeFile("buf/send2.txt", eA, err => {
    if (err) throw err;
    console.log("Send !");
  });
  nc.port(2389)
    .serve("buf/send2.txt")
    .listen();
};

const main = async () => {
  switch (process.argv[2]) {
    case "s":
			await pdf2bs64();
      let paperTXT = await readTXT()
      fs.writeFileSync('t1.txt', paperTXT)
      let buf = await new Buffer.from(paperTXT.toString(), 'base64')
      fs.writeFileSync('pdf.pdf', buf)

			let eA = await encryptFile(paperTXT, "./pem/privateA.pem")
			eA = process.argv[3] + '\n\n' + eA
			// console.log(eA);
			fs.writeFileSync("buf/send.txt", eA)
      sender(eA);
      break;
    default:
      break;
  }
};

main();
