// Load custom lib
const sender = require('./utils/sender')
const receiver = require('./utils/receiver')
const decrypt = require('./utils/decryptFile')

// const $ = document.querySelector.bind(document)

$('#sendBtn').addEventListener("click", function () {
    let path = $('#uploadFile').files[0].path
    let orcid = $('#inputORCID').value
    let privateKey = $('#inputPrivatekey').value
    sender(orcid, path, privateKey)
})

$('#recBtn').addEventListener("click", function () {
    let ip = $('#inputIP').value
    receiver(ip)
})