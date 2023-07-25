import sql from 'mssql'
import {config} from 'dotenv'

const dbSettings = {
    user: process.env.USER ,
    password: process.env.PASSWORD,
    server: process.env.SERVER,
    database: process.env.DB,

    options:{
        encrypt: false,
        trustServerCertificate:true,
        enableArithAbort:true
    }
//hola
}

export async function getConnection(){
    try {
        const pool = await sql.connect(dbSettings);
        const result = await pool.request().query("SELECT*FROM Products");
        return pool;
    } catch(error){
        console.error(error);

    }
}


export async function on(){
    console.log("hola");
    return 7 ;
}


