
import {getConnection,sql} from '../database/connection'




export const getProducts =  async (req,res) => {
    const pool = await getConnection();
    const result = await pool.request().query("SELECT*FROM Products");
    res.json(result.recordset);
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
    const pool = await getConnection();

    await pool.request()
    .input("name",sql.VarChar,name)
    .input("description",sql.Text,description)
    .input("quantity",sql.Int,quantity)
    .query('INSERT INTO Products (name,description,quantity) VALUES (@name,@description,@quantity)');
    
    res.json('new product');

}




export const eliminateProducts =  async (req,res) => {
    res.json('eliminate product');

}

export const updateProducts =  async (req,res) => {
    res.json('update product');

}

