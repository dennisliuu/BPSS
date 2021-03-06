const Koa = require('koa')
const router = require('koa-router')()
// const getData = require('../utils/getData')

const mongoose = require("mongoose");

mongoose.connect("mongodb://140.124.72.124:8080/paper", {
    useNewUrlParser: true
});

const Block = mongoose.model("Block", {
    fullName: String,
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

router.get("/", async ctx => {
  await ctx.render("index");
});

router.post("/", ctx => {
  ctx.body = `Request Body: ${JSON.stringify(ctx.request.body)}`;
  console.log(JSON.stringify(ctx.request.body));
  const new_block = new Block(ctx.request.body);
  console.log(new_block);
  new_block.save().then(() => console.log("Add success!"));
});

router.get("/blockchains", async ctx => {
  ctx.body = JSON.stringify(await getBlockchain(), null, "\t")
})

router.get("/blocks", async ctx => {
  ctx.body = JSON.stringify(await getBlock(), null, "\t")
})

module.exports = router;
