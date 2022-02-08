const model = require('../models/studentModel')

exports.getStudent = async(req,res,next) =>{
	try {
		const limit = parseInt(req.query.limit)
		const activePage = parseInt(req.query.activePage)
		const searchTxt = req.query.search
		const skip = (activePage-1)*limit
		const totalRecord = await model.find({name:{$regex:searchTxt, $options: "i"}})
		const totalPage = Math.ceil(totalRecord.length/limit)
		const studentData = await model.find({name:{$regex:searchTxt, $options: "i"}}).skip(skip).limit(limit)
		res.send({studentData: studentData,activePage: activePage,totalPage: totalPage, searchTxt: searchTxt})
	} catch (error) {
		res.send(404, error)
	}
}

exports.updateStudent = async(req,res,next) =>{
	try {
		const studentId = req.query.id
		const updateData = req.body
		const updateStudent = await model.findByIdAndUpdate(studentId, updateData)
		const limit = parseInt(req.query.limit)
		const activePage = parseInt(req.query.activePage)
		const searchTxt = req.query.search
		const skip = (activePage-1)*limit
		const totalRecord = await model.find({name:{$regex:searchTxt, $options: "i"}})
		const totalPage = Math.ceil(totalRecord.length/limit)
		const studentData = await model.find({name:{$regex:searchTxt, $options: "i"}}).skip(skip).limit(limit)
		const updatedStudent = await model.findById(studentId)
		res.send({studentData: studentData,activePage: activePage,totalPage: totalPage, searchTxt: searchTxt, updatedStudent: [updatedStudent]})
	} catch (error) {
		res.send(404, error)
	}
}

exports.deleteStudent = async(req,res,next) =>{
	try {
		const studentId = req.query.id
		const deleteStudent = await model.findByIdAndDelete(studentId)
		const limit = parseInt(req.query.limit)
		const activePage = parseInt(req.query.activePage)
		// console.log(activePage,'activePage');
		const searchTxt = req.query.search
		const skip = (activePage-1)*limit
		const totalRecord = await model.find({name:{$regex:searchTxt, $options: "i"}})
		const totalPage = Math.ceil(totalRecord.length/limit)
		const studentData = await model.find({name:{$regex:searchTxt, $options: "i"}}).skip(skip).limit(limit)
		res.send({studentData: studentData,activePage: activePage,totalPage: totalPage, searchTxt: searchTxt, deleteStudent: [deleteStudent]})
	} catch (error) {
		res.send(404, error)
	}
}
exports.addStudent = async(req,res,next) =>{
	try {
		const addData = req.body
		const addStudent = await model.create(addData)
		const limit = parseInt(req.query.limit)
		const activePage = parseInt(req.query.activePage)
		const searchTxt = req.query.search
		const skip = (activePage-1)*limit
		const totalRecord = await model.find({name:{$regex:searchTxt, $options: "i"}})
		const totalPage = Math.ceil(totalRecord.length/limit)
		const studentData = await model.find({name:{$regex:searchTxt, $options: "i"}}).skip(skip).limit(limit)
		res.send({studentData: studentData,activePage: activePage,totalPage: totalPage, searchTxt: searchTxt, addStudent: [addStudent]})
	} catch (error) {
		res.send(404, error)
	}
}
