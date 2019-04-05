const NodeRSA = require('node-rsa');
// const key = new NodeRSA({b: 512});
const gen = require('./gen')
const fs = require("fs")
const en = require('../BCP_test/utils/encryptFile')
const de = require('../BCP_test/utils/decryptFile')
gen('A','A')

// Encrypt
const encrypt = async () => {
    let paperTXT = await fs.readFileSync('DC_Assignment05.pdf', 'utf8')
    // console.log(paperTXT)
    let eA = await en(paperTXT, 'privateA.pem')
    // console.log(eA);
    fs.writeFileSync('pdf_text', eA)
}
// encrypt()

const decrypt = async () => {
    let paperTXT = await fs.readFileSync('pdf_text', 'utf8')
    // console.log(paperTXT);
    let eA = await de(paperTXT, 'publicA.pem')
    // console.log(eA)
    fs.writeFileSync('paper2.pdf', eA) 
}
// decrypt()

const main = async () => {
    await encrypt()
    await decrypt()
}

main()