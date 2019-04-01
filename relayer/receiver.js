const fs = require("fs");
const path = require("path");

const NetcatClient = require("netcat/client");
const nc = new NetcatClient();

const NodeRSA = require("node-rsa");
const decryptFile = require("../BCPtest/utils/decryptFile");

const rec = () => {
  nc.addr("140.124.72.190")
    .port(2389)
    .connect()
    .pipe(fs.createWriteStream("buf/send.txt"));
};

const buf2pdf = paperTXT => {
  let buf = new Buffer.from(paperTXT.toString(), 'base64')
  fs.writeFile("store/paper.pdf", buf, err => {
    if (err) throw err;
    console.log("Save !");
  });
};

function readTXT1 () {
  return new Promise(resolve => {
    setTimeout(() => {
      let data = fs.readFileSync("buf/send.txt", "utf8")
      resolve(data);
    }, 2000);
  });
};

const main = async () => {
  switch (process.argv[2]) {
    case "r":
      await rec();
      break;
    case "n":
      console.log(fs.readFileSync("buf/send.txt", "utf8").split("\n\n")[0]);
      break;
    case "d":
      let paperTXT = await readTXT1();
      // let paperHead = paperTXT.split("\n\n")[0];
      let paperBody = paperTXT
        .split("\n\n")
        .slice(-1)
        .pop();
      paperBody = paperBody.toString('base64')
      let key = path.join("pem", "publicA.pem");
      paperTXT = await decryptFile(paperBody, key);
      await buf2pdf(paperTXT);
      break;
    default:
      console.log("No argv call " + process.argv[2] + ".");
  }
};

main();
