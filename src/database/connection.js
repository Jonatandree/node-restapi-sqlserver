import sql from 'mssql'

const dbSettings = {
    user:"andree",
    password:"12345",
    server:"127.0.0.1",
    database:"webstore",
    options:{
        encrypt: false,
        trustServerCertificate:true,
        enableArithAbort:true
    }

}

async function getConnection(){
    const pool =await sql.connect(dbSettings);
    const result =await pool.request("SELECT 1");
    console.log(result);
}

getConnection();