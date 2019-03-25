const fs = require('fs')
const path = require('path')

const NetcatClient = require('netcat/client')
const nc = new NetcatClient()

const NodeRSA = require('node-rsa')
const generator = require('../BCPtest/utils/generator')
const encryptFile = require('../BCPtest/utils/encryptFile')
const decryptFile = require('../BCPtest/utils/decryptFile')

const rec = () => {
    nc.addr('140.124.72.190').port(2389).connect().pipe(
        fs.createWriteStream('buf/send.txt')
    )
}

const buf2pdf = (paperTXT) => {
    let buf = paperTXT
    let buff = new Buffer.from(buf, 'base64')
    fs.writeFileSync('store/2.pdf', buff, err => {
        if (err) throw err
        console.log('Save !')
    })
}

const readTXT = () => {
    return new Promise(resolve => {
		fs.readFile('buf/send.txt', 'utf8', (err, data) => {
			if (err) console.log(err)
			resolve(data)
		})
	})
}

const main = async () => {
    if (process.argv[2] == 'r') {
        await rec()
    }
    else if (process.argv[2] == 'd') {
        let paperTXT = await readTXT()
        let key = path.join('pem', 'private.pem')
        
        paperTXT = await decryptFile(paperTXT, '../BCPtest/pem/publicAB.pem')
        // for (let i = 3; i < process.argv.length; i++) {
        //     const e = process.argv[i]
        //     let paperTXT = await decryptFile(paperTXT, e)    
        // }
        console.log(paperTXT)
        // await buf2pdf(paperTXT)
    }
    else {
        console.log("NOT Correct argv")
    }
}

main()