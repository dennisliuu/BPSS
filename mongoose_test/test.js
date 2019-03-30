const mongoose = require("mongoose");
mongoose.connect("mongodb://140.124.72.124:8080/MongoDB_Plus_Blockchain", {
  useNewUrlParser: true
});
var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));

/*const Block = mongoose.model("Block", {
  fName: String,
  lName: String,
  tel: String,
  org: String,
  email: String,
  abstract: String,
  orcid: String
});
*/

const Block = mongoose.model("Block", {
	_id: String,
	"Block Number": String,
	Hash: String
})

// const kitty = new Cat({ name: "jimmy" });
// kitty.save((err, kitty) => {
//   console.log(err, kitty);
// });

Block.find({}, function(err, blocks) {
  if (err) {
    console.log(err);
  } else {
    console.log(blocks);
  }
});
// Block.deleteOne({ fName: 'dennis' }, function (err) {
// 	if (err) throw err;
// });
