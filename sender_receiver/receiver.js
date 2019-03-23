const fs = require('fs')
const NetcatClient = require('netcat/client')
const nc = new NetcatClient()

const rec = () => {
    nc.addr('140.124.72.190').port(2389).connect().pipe(
        fs.createWriteStream('buf/send.txt')
    )
}

const buf2pdf = () => {
    let buf = fs.readFileSync('buf/send.txt', 'utf8')
    let buff = new Buffer.from(buf, 'base64')
    fs.writeFileSync('2.pdf', buff, err => {
        if (err) throw err
        console.log('Save !')
    })
}

const main = async () => {
    if (process.argv[2] == 'r') {
        await rec()
    }
    else if (process.argv[2] == 'e') {
        await buf2pdf()
    }
    else {
        console.log("NOT CORRECT ARGV")
    }
}

main()