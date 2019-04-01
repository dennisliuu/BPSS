const fs = require("fs");

const NetcatServer = require("netcat/server");
const nc = new NetcatServer();

const NodeRSA = require("node-rsa");
const encryptFile = require("../BCPtest/utils/encryptFile");

const pdf2bs64 = () => {
  let buffer = fs.readFileSync("./store/send.pdf");
  let bs64 = buffer.toString("base64");
  fs.writeFile("buf/send.txt", bs64, err => {
    if (err) throw err;
    console.log("pdf complete!");
  });
};

const readTXT = () => {
  return new Promise(resolve => {
    fs.readFile("buf/send.txt", "utf8", (err, data) => {
      if (err) console.log(err);
      resolve(data);
    });
  });
};

const sender = eA => {
  fs.writeFile("buf/send.txt", eA, err => {
    if (err) throw err;
    console.log("Send !");
  });
  nc.port(2389)
    .serve("buf/send.txt")
    .listen();
};

const main = async () => {
  switch (process.argv[2]) {
    case "s":
			await pdf2bs64();
      let paperTXT = await readTXT()
      // let paperHead = paperTXT.split('\n\n')[0]
      // let paperBody = paperTXT.split('\n\n').slice(-1).pop()
      
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
