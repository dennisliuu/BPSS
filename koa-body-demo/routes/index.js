const router = require("koa-router")();
const getData = require('../utils/getData')

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
  new_block.save().then(() => console.log("Add success!"));
});

router.get("/blockchains", async ctx => {
  ctx.body = JSON.stringify(await getData.getBlockchain(), null, "\t")
})

router.get("/blocks", async ctx => {
  ctx.body = JSON.stringify(await getData.getBlock(), null, "\t")
})

module.exports = router;
