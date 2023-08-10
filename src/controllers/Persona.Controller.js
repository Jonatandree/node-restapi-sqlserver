import {getConnection,sql,queries} from '../database'
import querys from '../database/query'


export const getPersona =  async (req,res) => {
    try {
        const pool = await getConnection();
        const result = await pool.request().query(queries.getAllPersona);
        res.json(result.recordset);
        
    } catch (error) {
        res.status(500)
        res.send(error.messagwe);
    }
};



export const createNewPersona =  async (req,res) => {

    const {ID_persona,Primer_nombre,Segundo_nombre,Primer_apellido,Segundo_apellido,RTN,Telefono} =req.body

    try {
        const pool = await getConnection();

        await pool.request()
        .input("ID_persona",sql.Int,ID_persona)
        .input("Primer_nombre",sql.VarChar,Primer_nombre)
        .input("Segundo_nombre",sql.VarChar,Segundo_nombre)
        .input("Primer_apellido",sql.VarChar,Primer_apellido)
        .input("Segundo_apellido",sql.VarChar,Segundo_apellido)
        .input("RTN",sql.VarChar,RTN)
        .input("Telefono",sql.VarChar,Telefono)
        .query(queries.createNewPersona);
        
        res.json({ID_persona,Primer_nombre,Segundo_nombre,Primer_apellido,Segundo_apellido,RTN,Telefono});
        
    } catch (error) {
        res.status(500)
        res.send(error.messagwe);
        
    }
}

export const getPersonaById =  async (req,res) => {
    const {id} = req.params

    const pool = await getConnection();
    const result =await pool.request()
    .input("ID_persona", id)
    .query(queries.getPersonaById)
    res.send(result.recordset[0]);
}




export const deletepersona =  async (req,res) => {
    const {id} = req.params

    const pool = await getConnection();
    const result =await pool.request()
    .input("ID_persona", id)
    .query(queries.deletepersona)
    

    res.sendStatus(204);

}


export const updatePersonaById =  async (req,res) => {
    const {Primer_nombre,Segundo_nombre,Primer_apellido,Segundo_apellido,RTN,Telefono} =req.body;
    const {id} =req.params
    const pool = await getConnection();
    await pool
     .request()
     .input("Primer_nombre",sql.VarChar,Primer_nombre)
     .input("Segundo_nombre",sql.VarChar,Segundo_nombre)
     .input("Primer_apellido",sql.VarChar,Primer_apellido)
     .input("Segundo_apellido",sql.VarChar,Segundo_apellido)
     .input("RTN",sql.VarChar,RTN)
     .input("Telefono",sql.VarChar,Telefono)
     .input("ID_persona",sql.Int,id)
     .query(queries.updatepersonaById)

    res.json({id,Primer_nombre,Segundo_nombre,Primer_apellido,Segundo_apellido,RTN,Telefono});

};



