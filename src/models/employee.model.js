var dbConn = require('../../config/db.config');

var Employee = function(employee){
    this.name = employee.name;
    this.email = employee.email;
    this.phone = employee.phone;
    this.city = employee.city;
}

Employee.getAllEmployees = (result) =>{
    dbConn.query('SELECT * FROM employees', (err,res)=>{
        if(err){
            console.log("ERROR FOUND");
            result(null,err);
        }
        else{
            console.log("EMPLOYEES FETCHED SUCCESSFULLY");
            result(null,res);
        }
    })
}

Employee.getEmployeeByID = (id, result) =>{
    dbConn.query("SELECT * FROM employees WHERE id=?", id, (err, res)=>{
        if (err){
            console.log("error found in getting id")
            result(null, err)
        }else{
            console.log("Fetched by id successfully")
            result(null, res)
        }
    })
}

Employee.CreateEmolyee = (EmployeeReqData, result)=>{
    dbConn.query('INSERT INTO employees SET ?', EmployeeReqData, (err,res)=>{
        if (err){
            console.log("error found in creating id")
            result(null, err)
        }else{
            console.log("Created Successfully ")
            result(null, res)
        }

    })

}

Employee.UpdateEmolyee = (id, EmployeeReqData, result)=>{
    dbConn.query('UPDATE employees SET name=?,phone=?,email=?,city=? WHERE id=?', [EmployeeReqData.name, EmployeeReqData.phone, EmployeeReqData.email, EmployeeReqData.city, id], (err,res)=>{
        if (err){
            console.log("error on updating record")
            result(null, err)
        }else{
            console.log("UPDATED Successfully")
            result(null, res)
        }

    })

}

Employee.DeleteEmployee = (id,result)=>{
    dbConn.query('DELETE FROM employees WHERE id=?',[id],(err,res)=>{
        if (err){
            console.log("error on deleting record")
            result(null, err)
        }else{
            console.log("DELETED Successfully")
            result(null, res)
        }

    });
}


module.exports = Employee;