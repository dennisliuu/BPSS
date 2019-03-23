const fs = require('fs')
let buffer = fs.readFileSync('./store/send.pdf')
let bs64 = buffer.toString('base64')
fs.writeFile('buf/send.txt', bs64, err => {
	if (err) throw err
	console.log('Send !')
})

const NetcatServer = require('netcat/server')
const nc = new NetcatServer()
nc.port(2389).serve('buf/send.txt').listen()
