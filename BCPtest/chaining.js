const NodeRSA = require('node-rsa')
const fs = require('fs')
const generator = require('./utils/generator')
const encryptFile = require('./utils/encryptFile')
const decryptFile = require('./utils/decryptFile')

// let order: A B C

generator('A', 'AB')
generator('B', 'BC')
generator('C', 'CD')

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
	let eA = await encryptFile(paperTXT, './pem/privateA.pem')
	let dAB = await decryptFile(eA, './pem/publicAB.pem')
	let eAB = await encryptFile(eA, './pem/privateB.pem')
	let dBC = await decryptFile(eAB, './pem/publicBC.pem')
	let dC2 = await decryptFile(dBC, './pem/publicAB.pem')
	let ans = await encryptFile(eAB, './pem/privateC.pem')
}

main()
