const exec = require('child_process').exec;

const hashFile = (p, d) => {
    exec('python3 pdf2txt_PyPDF2.py $PWD/public/upload/' + d + '/' + p, (error, stdout, stderr) => {
        if (error) {
            console.error(`exec error: ${error}`)
            return
        }
        console.log(`stdout: ${stdout}`)
        console.log(`stderr: ${stderr}`)
    })
}

module.exports = hashFile
