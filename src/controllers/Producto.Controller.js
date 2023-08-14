
import {getConnection,sql,queries} from '../database'
import querys from '../database/query'



export const getProducto =  async (req,res) => {
    try {
        const pool = await getConnection();
        const result = await pool.request().query(queries.getAllProduct);
        res.json(result.recordset);
        
    } catch (error) {
        res.status(500)
        res.send(error.messagwe);
    }
};


export const createNewProducto =  async (req,res) => {
    const {nombre,descripcion,precio,cantidad,Categoria_ID} =req.body

    console.log(nombre)
    console.log(descripcion)
    console.log(precio)
    console.log(Categoria_ID)
    console.log(cantidad)

    
     
    if(nombre==null|| descripcion ==null){
        return res.status(400).json({msg:'porfabor ingrese los datos completos'})
    }
    if(antidad==null){
        antidad =0;
    }

    try {
        const pool = await getConnection();

        await pool.request()
        .input("nombre",sql.VarChar,nombre)
        .input("descripcion",sql.Text,descripcion)
        .input("precio",sql.Int,precio)
        .input("Categoria_ID",sql.Int,Categoria_ID)
        .input("cantidad",sql.Int,cantidad)
        .query(queries.createNewroducto);
        
        
        res.render('crearproducto' );
        
    } catch (error) {
        res.status(500)
        res.send(error.messagwe);
        
    }

    

}

export const getProductoById =  async (req,res) => {
    const {id} = req.params

    const pool = await getConnection();
    const result =await pool.request()
    .input("Id", id)
    .query(queries.getProductoById)
    

    res.send(result.recordset[0]);

}

export const deleteProducto =  async (req,res) => {
    const {id} = req.params

    const pool = await getConnection();
    const result =await pool.request()
    .input("Id", id)
    .query(queries.deleteProducto)
    

    res.sendStatus(204);

}


export const updateProductoById =  async (req,res) => {
    const {nombre,descripcion,precio,cantidad,Categoria_ID} =req.body;
    const {id} =req.params
    
    

    if(nombre==null|| descripcion ==null, cantidad==null){

        return res.status(400).json({msg:'porfabor ingrese los datos completos'});
    }

    const pool = await getConnection();
    await pool
     .request()
     .input("nombre",sql.VarChar,nombre)
     .input("descripcion",sql.Text,descripcion)
     .input("precio",sql.Int,precio)
     .input("Categoria_ID",sql.Int,Categoria_ID)
     .input("cantidad",sql.Int,cantidad)
     .input("id",sql.Int,id)
     .query(queries.updateProductoById)

    res.json({nombre,descripcion,cantidad,precio,Categoria_ID});

    res.render('inicio', );
    

};

