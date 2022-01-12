const Student = require('../models/student.Model')
const getStudents = (req,res)=>{
    Student.findAll()
    .then((response)=>{
        res.status(200).json({
            status:1,
            message:"fetched student records",
            data:response
        })
    })
    .catch((error)=>{
        res.status(500).json({
            status:0,
            message:"Error occured while fetching data",
            data:error
        })
    })
}

const addStudent = (req,res)=>{
    console.log(req.body)
    Student.create({
        studentName:req.body.studentName,
        rollNo:req.body.rollNo,
        mark1:req.body.mark1,
        mark2:req.body.mark2
    })
    .then((response)=>{
        res.status(200).json({
            status:1,
            message:"student data added to records",
            data:response
        })
    })
    .catch((error)=>{
        res.status(500).json({
            status:0,
            message:"Error occured while adding student data to records",
            data:error
        })
    })
  
}

const limitedStudents = (req,res)=>{
    console.log(req.params.id)
    Student.findAll({})
    .then((response)=>{
        res.status(200).json({
            status:1,
            message:"student data added to records",
            data:response
        })
    })
    .catch((error)=>{
        res.status(500).json({
            status:0,
            message:"Error occured while adding student data to records",
            data:error
        })
    })

}

module.exports ={
    getStudents,
    addStudent,
    limitedStudents
}