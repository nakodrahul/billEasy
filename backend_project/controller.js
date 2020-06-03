const configuration =require('./config');


const getUsers=(req,res)=>{
    const id=req.params.id;
  configuration.query(`Select * from userDetails where id=${id}`,(err,results)=>{
    if(err){
    throw err;
    }
    res.json(results.rows);
    })
}
const deleteUser=(req,res)=>{
    const id =req.params.id;
  configuration.query(`delete from userDetails where id=${id}`,(err,results)=>{
    if(err){
    throw err;
    }
    res.json("user with id=${id} deleted");
    })
}
const addUser=(req,res)=>{
    const id = req.params.id;
	const name= req.params.name;
	const salary = req.params.salary;
  configuration.query(`insert into userDetails values (${id},${name},${salary})`,(err,results)=>{
    if(err){
    throw err;
    }
    res.json("user details inserted");
    })
const updateUser=(req,res)=>{
    const id = req.params.id;
	const name= req.params.name;
	const salary = req.params.salary;
  configuration.query(`update userDetails set name = ${name}, salary = ${salary} where [id=${id}]`,(err,results)=>{
    if(err){
    throw err;
    }
    res.json("user details of user id=${id} updated");
    })
module.exports={
    getUsers, deleteUser, addUser, updateUser
};

const express=require ('express');
const router=express.Router();


router.get('/users/:id', getUsers);
router.delete('/users/:id', deleteUser);
router.post('/users/:id, /users/:name, /users/:salary', addUser);
router.put('/users/:id, /users/:name, /users/:salary', updateUser);


