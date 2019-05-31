const exec = require('child_process').exec;

const hashFile = (d, f) => {
	exec('python3 $PWD/utils/pdf2txt_PyPDF2.py $PWD/public/upload/' + d + '/' + f, (error, stdout, stderr) => {
        if (error) {
            console.error(`exec error: ${error}`)
            return
        }
        console.log(`stdout: ${stdout}`)
        console.log(`stderr: ${stderr}`)
    })
}

module.exports = hashFile
