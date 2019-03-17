const mongoose = require('mongoose'); mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true});  
const Cat = mongoose.model('Cat', { name: String });  
const kitty = new Cat({ name: 'Zildjian' }); 
kitty.save().then(() => console.log('meow'));

const kittyFromDb = Cat.find({ name: 'Zildjian'}, function (err, res) { console.log(res) })
