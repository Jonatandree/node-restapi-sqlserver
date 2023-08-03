
export const queries= {
    getAllProduct:'SELECT*FROM Products',
    createNewProducts:"INSERT INTO Products (name,description,quantity) VALUES (@name,@description,@quantity)",
    getProductById:'SELECT*FROM Products WHERE Id=@Id',
    deleteProduct: 'DELETE FROM Products WHERE Id=@Id'


}   