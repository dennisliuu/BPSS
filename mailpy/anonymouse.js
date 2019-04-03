// We need this to build our post string
var querystring = require('querystring');
var http = require('http');
var fs = require('fs');

function PostCode(to='dennisliuu@gmail.com', subject='sent by js', message='Hi') {
    // Build the post string from an object
    var post_data = querystring.stringify({
        'to': to,
        'subject': subject,
        'text': message
    });

    // An object of options to indicate where to post to
    var post_options = {
        hostname: '193.200.150.152',
        port: '80',
        path: '/anonemail.html',
        method: 'POST',
        headers: {
            'Host': 'anonymouse.org',
            'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64; rv:52.0) Gecko/20100101 Firefox/52.0',
            'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
            'Accept-Language': 'en-US,en;q=0.5',
            'Accept-Encoding': 'gzip, deflate',
            'Referer': 'http://anonymouse.org/anonemail.html',
            'Connection': 'close',
            'Upgrade-Insecure-Requests': '1',
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    };

    // Set up the request
    var post_req = http.request(post_options, function (res) {
        res.setEncoding('utf8');
        res.on('data', function (chunk) {
            console.log('Response: ' + chunk);
        });
    });

    // post the data
    post_req.write(post_data);
    post_req.end();

}


PostCode();
