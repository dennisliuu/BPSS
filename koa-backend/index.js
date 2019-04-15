const Koa = require('koa');
var Router = require('koa-router');

const app = new Koa();
const router = new Router();

const cors = require('@koa/cors');
app.use(cors());

router
  .get('/', (ctx, next) => {
    ctx.body = 'Hello World!';
  })
  .post('/users', (ctx, next) => {
    ctx.body = 'users'
  })
  .put('/users/:id', (ctx, next) => {
    // ...
  })
  .del('/users/:id', (ctx, next) => {
    // ...
  })
  .all('/users/:id', (ctx, next) => {
    // ...
  });

app
  .use(router.routes())
  .use(router.allowedMethods());

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log('[ok] Server starts at http://127.0.0.1:3000');
});

