const Pool=require('pg').Pool;
userPg="root"//db user name
hostname=127.0.0.1 //db host same for all
db="test_db" //database name
pass="root" //db user password if u set when at the time of creating db
portno=3211;//db port

const pool=new Pool({
	user:userPg,
	host:hostname,
	database:db,
	password:pass,
	port:portno
})
module.exports=pool;
