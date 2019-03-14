var NodeRSA = require('node-rsa')
var fs = require('fs')

/**
 * @param  {String} paperTXT
 * @param  {String} pub
 */
function encryptFile(paperTXT, pub) {
	return new Promise(resolve => {
	    fs.readFile(pub, (err, data) => {
            if (err) console.log(err);
    	    var key = new NodeRSA(data);
        	let cipherText = key.encryptPrivate(paperTXT, 'base64');
        	console.log('加密：' + cipherText);
			resolve(cipherText)
    	})
	})
}

module.exports = encryptFile