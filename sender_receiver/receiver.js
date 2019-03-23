const fs = require('fs')
const NetcatClient = require('netcat/client')
const nc = new NetcatClient()
nc.addr('140.124.72.190').port(2389).connect().pipe(fs.createWriteStream('buf/send.txt'))

let buff = fs.readFileSync('buf/send.txt', 'utf8')
let	buff2 = new Buffer.from(buff, 'base64')
fs.writeFileSync('2.pdf', buff2, err => {
    if (err) throw err
	console.log('Save !')
})