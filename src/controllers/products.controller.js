
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

    const {name,description} =req.body
    let {quantity} =req.body
    if(quantity==null){
        quantity =0;
    } 
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
        
        res.json({name,description,quantity});
        
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





export const updateProducts =  async (req,res) => {
    res.json('update product');

}

