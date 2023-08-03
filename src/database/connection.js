import sql from 'mssql'
import {config} from 'dotenv'

const dbSettings = {
    user: process.env.USER ,
    password: process.env.PASSWORD,
    server: process.env.SERVER,
    database: process.env.DB,

    options:{
        encrypt: true,
        trustServerCertificate:true,
        enableArithAbort:true
    }
//hola
}

export async function getConnection(){
    try{
        const pool =await sql.connect(dbSettings);
        return pool;
    }catch(error){
        console.error(error);
    }
}


export{sql};


