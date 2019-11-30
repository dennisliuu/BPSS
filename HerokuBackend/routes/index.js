// 引入 router: 即當頁面網址為 '/' 或 '/blocks' 或 '/blockchain' 該做什麼 
const router = require('koa-router')()
// 引入 mongoose: 即使用 mongoose 這個套件操作 MongoDB
const mongoose = require("mongoose");

// MongoDB connect
mongoose.connect("mongodb://140.124.72.124:8080/paper", {
    useNewUrlParser: true
});

const Block = mongoose.model("Block", {
    firstName: String,
    lastName: String,
    tel: String,
    org: String,
    email: String,
    title: String,
    abstract: String,
    orcid: String,
    filename: String,
    date: String
});
const getBlock = () =>
    new Promise((resolve, reject) => {
        Block.find({}, (err, blocks) => {
            if (err) {
                console.log(err);
            } else {
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
                resolve(blocks)
            }
        })
    })

const Reviewercomment = mongoose.model("Reviewercomment", {
    titleSelect: String,
    name: String,
    orcid: String,
    email: String,
    comment: String
})

router.get("/", async ctx => {
    await ctx.render("index");
});

router.post("/", async ctx => {
    await ctx.render("index2", { a: 'apple', b: 'ball', c: 'cat' });
    console.log(JSON.stringify(ctx.request.body));
    const new_block = new Block(ctx.request.body);
    console.log(new_block);
    new_block.save().then(() => console.log("Add success!"));
});

router.get("/reviewer", async ctx => {
    await ctx.render("reviewer")
})

router.post("/reviewer", async ctx => {
    ctx.body = `${JSON.stringify(ctx.request.body, null, "\t")}`
    console.log(JSON.stringify(ctx.request.body));
    const new_reviewercomment = new Reviewercomment(ctx.request.body)
    new_reviewercomment.save().then(() => console.log("Add success!"));
})

router.get("/blockchains", async ctx => {
    ctx.body = JSON.stringify(await getBlockchain(), null, "\t")
})

router.get("/blocks", async ctx => {
    ctx.body = JSON.stringify(await getBlock(), null, "\t")
})

module.exports = router;
