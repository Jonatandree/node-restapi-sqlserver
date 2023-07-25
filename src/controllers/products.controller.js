
import {getConnection} from '../database/connection'
import {on} from '../database/connection'




export const getProducts =  async (req,res) => {

    const pool = await getConnection();
    //console.log("hola");
    //console.log(pool);
    //const pool = await getConnection();
    const result = await pool.request().query("SELECT*FROM Products");
    res.json(result.recordset);
};


export const createNewProducts =  async (req,res) => {
    res.json('new product');

}

export const eliminateProducts =  async (req,res) => {
    res.json('eliminate product');

}

export const updateProducts =  async (req,res) => {
    res.json('update product');

}






































export const Products =  async (req,res) => {

    console.log("-------------------");
    console.log("holaon");
    const num =on();
    console.log(num);
    res.json(num);
    console.log("-------------------");
    
};