const mongoose = require("mongoose")

const schema = mongoose.Schema({
	ip: String,
	email: String,
},{ collection : 'Emails' })

module.exports = mongoose.model("Email", schema)
