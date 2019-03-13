const NodeRSA = require('node-rsa')
const fs = require('fs')
const generator = require('./utils/generator')
const encryptFile = require('./utils/encryptFile')
const decryptFile = require('./utils/decryptFile')

// let order: A B C

generator('B', 'AB')
generator('C', 'BC')

const readTXT = () => {
    return new Promise(resolve => {
		fs.readFile('./store/paper.txt', 'utf8', (err, data) => {
			if (err) console.log(err)
			resolve(data)
		})
	})
}

async function main() {
	let paperTXT = await readTXT()
	console.log('文本：' + paperTXT);	
	let eAB = await encryptFile(paperTXT, './pem/publicAB.pem')
	let dB = await decryptFile(eAB, './pem/privateB.pem')
	let eBC = await encryptFile(eAB, './pem/publicBC.pem')
	let dC = await decryptFile(eBC, './pem/privateC.pem')
	let dC2 = await decryptFile(dC, './pem/privateB.pem')
}

main()
