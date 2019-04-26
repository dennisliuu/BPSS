const Koa = require('koa');
const koaBody = require('koa-body');
const Router = require('koa-router');
const cors = require('@koa/cors');

const app = new Koa();
const router = new Router();

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

app
	.use(router.routes())
	.use(router.allowedMethods())
	.use(cors())
	.use(koaBody({
		multipart: true
	}))

router
	.get('/', (ctx, next) => {
		ctx.body = 'Welcome to BPASS Homepage!';
	})
	.post('/', (ctx, next) => {
		ctx.body = `Request Body: ${JSON.stringify(ctx.request.body)}`;
		console.log(JSON.stringify(ctx.request.body));
		const new_block = new Block(ctx.request.body);
		console.log(new_block);
		new_block.save().then(() => console.log("Add success!"));
	})
	.get('/blockchains', async (ctx, next) => {
		ctx.body = JSON.stringify(await getBlockchain(), null, "\t")
	})
	.get('/blocks', async (ctx, next) => {
		ctx.body = JSON.stringify(await getBlock(), null, "\t")
	})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
	console.log('[ok] Server starts at http://127.0.0.1:3000');
});

