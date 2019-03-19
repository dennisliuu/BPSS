const mongoose = require('mongoose');
mongoose.connect('mongodb://140.124.72.190:27017/test', {useNewUrlParser: true});
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

const Cat = mongoose.model('Cat', { name: String });

const kitty = new Cat({ name: 'jimmy' });
kitty.save((err, kitty) => {
	console.log(err, kitty)
})

