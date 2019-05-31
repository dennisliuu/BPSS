var NodeRSA = require('node-rsa')
var fs = require('fs')

/**
 * @param  {string} pri
 * @param  {string} pub
 */
function generator(pri, pub) {
    var key = new NodeRSA({ b: 512 })
    key.setOptions({ encryptionScheme: 'pkcs1' })

    var privatePemB = key.exportKey('pkcs1-private-pem')
    var publicPemAB = key.exportKey('pkcs1-public-pem')

    fs.writeFile('private' + pri + '.pem', privatePemB, (err) => {
        if (err) throw err
        console.log('私鑰' + pri + ' 已儲存！')
    })
    fs.writeFile('public' + pub + '.pem', publicPemAB, (err) => {
        if (err) throw err
        console.log('公鑰' + pub + ' 已儲存！')
    })
}

module.exports = generator