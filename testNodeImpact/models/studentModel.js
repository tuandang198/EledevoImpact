const mongoose = require('mongoose')

const studentSchema = new mongoose.Schema({
	name:{
		type: 'string'
	}
})

const model = new mongoose.model('teacher',studentSchema)

module.exports = model