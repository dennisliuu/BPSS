// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// No Node.js APIs are available in this process because
// `nodeIntegration` is turned off. Use `preload.js` to
// selectively enable features needed in the rendering
// process.
// const sender = require('./utils/sender')
// const receiver = require('./utils/receiver')

// const $ = document.querySelector.bind(document)

$('#sendBtn').addEventListener("click", function (event) {
    let path = $('#uploadFile').files[0].path
    let orcid = $('#inputORCID').value
    let publickey = $('#inputPublickey').value
    console.log({path, orcid, publickey});
    
})



// var _myreq = {
//     state: 0, //0 is no error, 4 is error with message, etc.
//     message: "", //can include error message (if any)
//     data: [0, 4, 6] //application data for request (String, Array, Object)
// };
// ipc.send('mychannel-functiona', _myreq);

