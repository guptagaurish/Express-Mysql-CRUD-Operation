const EmployeeModel = require('../models/employee.model');

exports.getEmployeeList = (req,res) =>{
    //console.log("All employee list is here")
    EmployeeModel.getAllEmployees((err, employees)=>{
        console.log("we are here");
        if(err){
            res.send(err);
        }
        console.log('Employees', employees)
        res.send(employees)
    })
}

exports.getEmployeeByID = (req,res) =>{
    console.log("we are and employee by id");
    EmployeeModel.getEmployeeByID(req.params.id, (err,employees)=>{
        if(err){
            res.send(err)
        }
        console.log('Employee fetched successfully by id')
        res.send(employees)
    })
        
}

exports.CreateEmployees = (req,res)=>{
    console.log("create employees", req.body)
    const EmployeeReqData = new EmployeeModel(req.body);

    if(req.body.constructor === Object && Object(req.body).length === 0){
        res.send(400).send({success: false, message: 'Please enter Valid data'})
    }else{
        console.log('Valid Information')
        EmployeeModel.CreateEmolyee(EmployeeReqData,(err, employee)=>{
            if(err){
                res.send(err)
                 
            }else{
                res.json({status:true, message:'inserted', data:employee})
            }
        })
    }
}

exports.UpdateEmployees = (req,res) =>{
    console.log("Update employees", req.body)
    const EmployeeReqData = new EmployeeModel(req.body);

    if(req.body.constructor === Object && Object(req.body).length === 0){
        res.send(400).send({success: false, message: 'Please enter Valid data'})
    }else{
        console.log('Valid Information')
        EmployeeModel.UpdateEmolyee(req.params.id, EmployeeReqData,(err, employee)=>{
            if(err){
                res.send(err)
                 
            }else{
                res.json({status:true, message:'updated', data:employee})
            }
        })
    }

}

exports.DeleteEmployee = (req,res)=>{
    EmployeeModel.DeleteEmployee(req.params.id,(err,employee)=>{
        if(err){
            res.send(err)
             
        }else{
            res.json({status:true, message:'Deleted'});
        }

    })
}