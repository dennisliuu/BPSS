const fs = require('fs')
const NodeRSA = require('node-rsa')
const encryptFile = require('../BCPtest/utils/encryptFile')

const pdf2bs64 = () => {
	let buffer = fs.readFileSync('./store/paper.pdf')
	let bs64 = buffer.toString('base64')
	fs.writeFile('buf/send.txt', bs64, err => {
		if (err) throw err
		console.log('pdf complete!')
	})
}

const readTXT = () => {
    return new Promise(resolve => {
		fs.readFile('buf/send.txt', (err, data) => {
			if (err) console.log(err)
			resolve(data)
		})
	})
}

const sender = (eA) => {
	fs.writeFile('buf/send.txt', eA, err => {
		if (err) throw err
		console.log('Send !')
	})
	const NetcatServer = require('netcat/server')
	const nc = new NetcatServer()
	nc.port(2389).serve('buf/send.txt').listen()
}

const main = async () => {
	await pdf2bs64()
	let paperTXT = await readTXT()
	// console.log('文本 (N)：' + paperTXT)
	let eA = await encryptFile(paperTXT, '../BCPtest/pem/privateA.pem')
	sender(eA)
}

main()