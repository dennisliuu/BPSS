const Koa = require('koa')
const consola = require('consola')
const { Nuxt, Builder } = require('nuxt')

const mongoose = require('mongoose'); mongoose.connect('mongodb://140.124.72.190:27017/test', {useNewUrlParser: true});  
const Cat = mongoose.model('Cat', { name: String, orcid: String });  
const kitty = new Cat({ name: 'Zildjian', orcid: "0000-0000-1234-567" }); 
kitty.save().then(() => console.log('meow'));

// const kittyFromDb = Cat.find({ name: 'Zildjian'}, function (err, res) { console.log(res) })
Cat.find({}, function(err, users){
  if(err){
    console.log(err);
  } else{
    console.log(users)
  }
})

const app = new Koa()

// Import and Set Nuxt.js options
let config = require('../nuxt.config.js')
config.dev = !(app.env === 'production')

async function start() {
  // Instantiate nuxt.js
  const nuxt = new Nuxt(config)

  const {
    host = process.env.HOST || '127.0.0.1',
    port = process.env.PORT || 3000
  } = nuxt.options.server

  // Build in development
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  } else {
    await nuxt.ready()
  }

  app.use(ctx => {
    ctx.status = 200
    ctx.respond = false // Bypass Koa's built-in response handling
    ctx.req.ctx = ctx // This might be useful later on, e.g. in nuxtServerInit or with nuxt-stash
    nuxt.render(ctx.req, ctx.res)
  })

  app.listen(port, host)
  consola.ready({
    message: `Server listening on http://${host}:${port}`,
    badge: true
  })
}

start()
