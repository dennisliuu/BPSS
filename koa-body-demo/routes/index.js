const router = require("koa-router")();
const koaBody = require("koa-body");
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

const Blockchain = mongoose.model("Blockchain", {
	_id: String,
	"Block Number": String,
	Hash: String
}, 'blockchain')

router.get("/", async ctx => {
  await ctx.render("index");
});

// router.post('/', async (ctx)=>{
//   // console.log(ctx.request.files);
//   console.log(ctx.uploadpath);
//   ctx.body = JSON.stringify(ctx.request.file);
// });

router.post("/", async ctx => {
  ctx.body = `Request Body: ${JSON.stringify(ctx.request.body)}`;
  // console.log(JSON.stringify(ctx.request.body));
  const new_block = new Block(ctx.request.body);
  console.log(new_block);
  // console.log(kitty2)
  new_block.save().then(() => console.log("Add success!"));
  // kitty2.save().then(() => console.log('meow2'))
});

router.get("/blocks", async ctx => {

  await Blockchain.find({}, (err, blocks) => {
    if (err) {
      console.log(err);
    } else {
      console.log(blocks);
      ctx.body = blocks
    }
  });
})

module.exports = router;
