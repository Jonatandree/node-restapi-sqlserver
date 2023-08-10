
import {getConnection,sql,queries} from '../database'
import querys from '../database/query'



export const getProducts =  async (req,res) => {
    try {
        const pool = await getConnection();
        const result = await pool.request().query(queries.getAllProduct);
        res.json(result.recordset);
        
    } catch (error) {
        res.status(500)
        res.send(error.messagwe);
    }
};


export const createNewProducts =  async (req,res) => {
    const {name,description,quantity} =req.body

    console.log(name)
    console.log(description)
    console.log(quantity)

    
     
    if(name==null|| description ==null){
        return res.status(400).json({msg:'porfabor ingrese los datos completos'})
    }
    if(quantity==null){
        quantity =0;
    }

    try {
        const pool = await getConnection();

        await pool.request()
        .input("name",sql.VarChar,name)
        .input("description",sql.Text,description)
        .input("quantity",sql.Int,quantity)
        .query(queries.createNewProducts);
        
        
        res.render('crearproducto' );
        
    } catch (error) {
        res.status(500)
        res.send(error.messagwe);
        
    }

    

}

export const getProductById =  async (req,res) => {
    const {id} = req.params

    const pool = await getConnection();
    const result =await pool.request()
    .input("Id", id)
    .query(queries.getProductById)
    

    res.send(result.recordset[0]);

}

export const deleteProduct =  async (req,res) => {
    const {id} = req.params

    const pool = await getConnection();
    const result =await pool.request()
    .input("Id", id)
    .query(queries.deleteProduct)
    

    res.sendStatus(204);

}


export const updateProductsById =  async (req,res) => {
    const {name,description,quantity} =req.body;
    const {id} =req.params
    
    

    if(name==null|| description ==null, quantity==null){

        return res.status(400).json({msg:'porfabor ingrese los datos completos'});
    }

    const pool = await getConnection();
    await pool
     .request()
     .input("name",sql.VarChar,name)
     .input("description",sql.Text,description)
     .input("quantity",sql.Int,quantity)
     .input("id",sql.Int,id)
     .query(queries.updateProductById)

    res.json({name,description,quantity});

    res.render('inicio', );
    

};

