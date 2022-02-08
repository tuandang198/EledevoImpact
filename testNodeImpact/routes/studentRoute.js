const controller = require('../controllers/studentController')

const route = (app) => {
	app.get('/student', controller.getStudent),
	app.put('/student', controller.updateStudent),
	app.post('/student', controller.addStudent),
	app.delete('/student', controller.deleteStudent)
}

module.exports = route