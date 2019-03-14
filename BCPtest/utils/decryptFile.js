var NodeRSA = require('node-rsa')
var fs = require('fs')

/**
 * @param  {String} paperTXT
 * @param  {String} pri
 */
function decryptFile(paperTXT, pri) {
	return new Promise(resolve => {
	    fs.readFile(pri, (err, data) => {
            if (err) console.log(err)
    	    var key = new NodeRSA(data);
        	let rawText = key.decryptPublic(paperTXT, 'utf8');
        	console.log('解密：' + rawText);
			resolve(rawText)
    	})
	})
}

module.exports = decryptFile