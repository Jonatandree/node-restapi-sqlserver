
export const queries= {
    getAllProduct:'SELECT*FROM Products',
    createNewProducts:"INSERT INTO Products (name,description,quantity) VALUES (@name,@description,@quantity)",
    getProductById:'SELECT*FROM Products WHERE Id=@Id',
    deleteProduct: 'DELETE FROM Products WHERE Id=@Id',
    updateProductById:'UPDATE Products SET Name= @name,Description=@description,Quantity=@quantity WHERE Id =@Id',




    getAllPersona:'SELECT*FROM Persona',
    createNewPersona:"INSERT INTO Persona (ID_persona,Primer_nombre,Segundo_nombre,Primer_apellido,Segundo_apellido,RTN,Telefono) VALUES (@ID_persona,@Primer_nombre,@Segundo_nombre,@Primer_apellido,@Segundo_apellido,@RTN,@Telefono)",
    getPersonaById:'SELECT*FROM Persona WHERE ID_persona=@ID_persona',
    deletepersona: 'DELETE FROM Persona WHERE ID_persona=@ID_persona',
    updatepersonaById:'UPDATE Persona SET Primer_nombre=@Primer_nombre,Segundo_nombre=@Segundo_nombre,Primer_apellido=@Primer_apellido,Segundo_apellido=@Segundo_apellido,RTN=@RTN,Telefono=@Telefono WHERE ID_persona=@ID_persona'
};
