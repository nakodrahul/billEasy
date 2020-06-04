const configuration =require('./config');


const getEmployees=(req,res)=>{
    const id=req.params.id;
  configuration.query(`Select * from employeeDetails where id=${id}`,(err,results)=>{
    if(err){
    throw err;
    }
    res.json(results.rows);
    })
}
const deleteEmployee=(req,res)=>{
    const id =req.params.id;
  configuration.query(`delete from employeeDetails where id=${id}`,(err,results)=>{
    if(err){
    throw err;
    }
    res.json("Employee with id=${id} deleted");
    })
}
const addEmployee=(req,res)=>{
    const id = req.params.id;
	const name= req.params.name;
	const salary = req.params.salary;
  configuration.query(`insert into employeeDetails values (${id},${name},${salary})`,(err,results)=>{
    if(err){
    throw err;
    }
    res.json("Employee details inserted");
    })
  }
const updateEmployee=(req,res)=>{
    const id = req.params.id;
	const name= req.params.name;
	const salary = req.params.salary;
  configuration.query(`update employeeDetails set name = ${name}, salary = ${salary} where [id=${id}]`,(err,results)=>{
    if(err){
    throw err;
    }
    res.json("Employee details of id=${id} updated");
    })
  }
module.exports={
    getUsers, deleteUser, addUser, updateUser
};

const express=require ('express');
const router=express.Router();


router.get('/users/:id', getEmployees);
router.delete('/users/:id', deleteEmployee);
router.post('/users/:id, /users/:name, /users/:salary', addEmployee);
router.put('/users/:id, /users/:name, /users/:salary', updateEmployee);
