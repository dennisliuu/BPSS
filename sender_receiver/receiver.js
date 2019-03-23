const fs = require('fs')
const NetcatClient = require('netcat/client')
const nc = new NetcatClient()

nc.addr('140.124.72.190').port(2389).connect().pipe(
    fs.createWriteStream('buf/send.txt'),
    setTimeout(() => {
        let buf = fs.readFileSync('buf/send.txt', 'utf8')
        let buff = new Buffer.from(buf, 'base64')
        fs.writeFileSync('2.pdf', buff, err => {
            if (err) throw err
            console.log('Save !')
        })
    }, 2000)
)