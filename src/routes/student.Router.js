const express = require("express")
const router = express.Router()
const studentController = require('../controllers/student.Controller')

router.route('/')
      .get(studentController.getStudents)

router.route('/:id')
      .get(studentController.limitedStudents)  

router.route('/addstudent')
      .post(studentController.addStudent)

// router.route('/updatestudent/:id')
//       .put(studentController.updateStudent)


module.exports = router