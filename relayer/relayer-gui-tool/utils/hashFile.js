const crypto = require('crypto');
const fs = require('fs');
const hash = crypto.createHash('sha256');

fs.readFile('a.pdf', function (err, data) {
    if (err) throw err;
    console.log(hash.update(data.toString()).digest('hex'));
});