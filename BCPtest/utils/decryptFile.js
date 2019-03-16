var NodeRSA = require('node-rsa')
var fs = require('fs')

/**
 * @param  {String} paperTXT
 * @param  {String} pub
 */
function decryptFile(paperTXT, pub) {
	return new Promise(resolve => {
	    fs.readFile(pub, (err, data) => {
            if (err) console.log(err)
    	    var key = new NodeRSA(data);
        	let rawText = key.decryptPublic(paperTXT, 'utf8');
        	console.log('解密 (S)：' + rawText);
			resolve(rawText)
    	})
	})
}

module.exports = decryptFile
