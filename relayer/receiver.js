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
    .pipe(fs.createWriteStream("buf/send.txt"))
}

const buf2pdf = paperTXT => {
  let buf = paperTXT
  let buff = new Buffer.from(buf, "base64")
  fs.writeFileSync("store/2.pdf", buff, err => {
    if (err) throw err
    console.log("Save !")
  })
}

const readTXT = () => {
  return new Promise(resolve => {
    fs.readFile("buf/send.txt", "utf8", (err, data) => {
      if (err) console.log(err)
      resolve(data)
    })
  })
}

const main = async () => {
  switch (process.argv[2]) {
    case "r":
      await rec();
      console.log((fs.readFileSync("buf/send.txt", "utf8")).split('\n\n')[0])
      break
    case "d":
      let paperTXT = await readTXT()
      let paperHead = paperTXT.split('\n\n')[0]
      let paperBody = paperTXT.split('\n\n').slice(-1).pop()

      let key = path.join("pem", "public.pem")
      paperTXT = await decryptFile(paperBody, key)
      console.log(paperTXT);
      await buf2pdf(paperTXT)
      break
    // case "t":
    //   console.log((fs.readFileSync("buf/send.txt", "utf8")).split('\n\n')[0])
    //   break
    default:
      console.log("No argv call " + process.argv[2] + ".")
  }
}

main();
