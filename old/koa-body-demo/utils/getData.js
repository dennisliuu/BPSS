const mongoose = require("mongoose");

mongoose.connect("mongodb://140.124.72.124:8080/paper", {
    useNewUrlParser: true
});

const Block = mongoose.model("Block", {
    fName: String,
    lName: String,
    tel: String,
    org: String,
    email: String,
    abstract: String,
    orcid: String,
    paper_txt: String
});
const getBlock = () =>
    new Promise((resolve, reject) => {
        Block.find({}, (err, blocks) => {
            if (err) {
                console.log(err);
            } else {
                // console.log(blocks);
                resolve(blocks)
            }
        })
    })

const Blockchain = mongoose.model("Blockchain", {
    _id: String,
    "Block Number": String,
    Hash: String
}, 'blockchain')
const getBlockchain = () =>
    new Promise((resolve, reject) => {
        Blockchain.find({}, (err, blocks) => {
            if (err) {
                console.log(err);
            } else {
                // console.log(blocks);
                resolve(blocks)
            }
        })
    })

module.exports = {
    getBlock,
    getBlockchain
}