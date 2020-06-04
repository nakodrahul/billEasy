const Pool=require('pg').Pool;
employeePg="root"
hostname=127.0.0.1 
db="employee_db"
pass="root" 
portno=3211;

const pool=new Pool({
	user:employeePg,
	host:hostname,
	database:db,
	password:pass,
	port:portno
})
module.exports=pool;
