const mongoose = require('mongoose'); 

const postMongoDB = (f) => {
    let a = 'mail.py'
    mongoose.connect('mongodb://140.124.72.190:27017/test', {useNewUrlParser: true})
    const Cat = mongoose.model('Cat', { name: String });  
    const kitty = new Cat({ name: a });
    const kitty2 = new Cat({ name: f });
    console.log(kitty)
    console.log(kitty2)
    kitty.save().then(() => console.log('meow'))
    kitty2.save().then(() => console.log('meow2'))
    // const kittyFromDb = Cat.find({ name: 'Zildjian'}, function (err, res) { console.log(res) })
}

module.exports = postMongoDB