const router = require('koa-router')();
const koaBody = require('koa-body');
const mongoose = require('mongoose');

router.get('/', async (ctx) => {
  await ctx.render('index');
});

// router.post('/', async (ctx)=>{
//   // console.log(ctx.request.files);
//   console.log(ctx.uploadpath);
//   ctx.body = JSON.stringify(ctx.request.file);
// });

router.post('/', async ctx => {
  ctx.body = `Request Body: ${JSON.stringify(ctx.request.body)}`;
  console.log(JSON.stringify(ctx.request.body));
  mongoose.connect('mongodb://140.124.72.190:27017/test', { useNewUrlParser: true })
  const Cat = mongoose.model('Cat', {
    fName: String,
    lName: String,
    tel: String,
    org: String,
    email: String,
    abstract: String,
    orcid: String
  }
  );
  const kitty = new Cat( ctx.request.body );
  console.log(kitty)
  // console.log(kitty2)
  kitty.save().then(() => console.log('meow'))
  // kitty2.save().then(() => console.log('meow2'))
});

module.exports = router;
