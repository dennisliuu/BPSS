// Load custom lib
const sender = require('./utils/sender')
const receiver = require('./utils/receiver')
const decode = require('./utils/decode')

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

function getRadioValue() { 
    var ele = document.getElementsByName('gender'); 
    for(i = 0; i < ele.length; i++) { 
        if(ele[i].checked) 
        document.getElementById("result").innerHTML
                = "Gender: "+ele[i].value; 
    } 
} 

$('#decodeBtn').addEventListener("click", function () {
    let fileName = $('#decodeFile').files[0].path
    let publicKey = $('#inputPublickey').value
    let filetype = 1
    let selection = document.querySelectorAll('input[name="typeRadios"]')
    for(i = 0; i < selection.length; i++) { 
        if(selection[i].checked) 
        filetype = selection[i].value
    } 
    console.log({fileName, publicKey, filetype})
    decode(fileName, publicKey, filetype)
})