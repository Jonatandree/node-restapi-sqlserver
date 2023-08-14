
export const queries= {
    getAllProduct:'SELECT*FROM Producto',

    createNewProducto:"INSERT INTO Producto (name,description,quantity) VALUES (@name,@description,@quantity)",

    getProductoById:'SELECT*FROM Producto WHERE Id=@Id',

    deleteProducto: 'DELETE FROM Producto WHERE Id=@Id',

    updateProductoById:'UPDATE Producto SET Name= @name,Description=@description,Quantity=@quantity WHERE Id =@Id',

    getAllPersona:'SELECT*FROM Persona',

    createNewPersona:"INSERT INTO Persona (ID_persona,Primer_nombre,Segundo_nombre,Primer_apellido,Segundo_apellido,RTN,Telefono) VALUES (@ID_persona,@Primer_nombre,@Segundo_nombre,@Primer_apellido,@Segundo_apellido,@RTN,@Telefono)",

    getPersonaById:'SELECT*FROM Persona WHERE ID_persona=@ID_persona',

    deletepersona: 'DELETE FROM Persona WHERE ID_persona=@ID_persona',

    updatepersonaById:'UPDATE Persona SET Primer_nombre=@Primer_nombre,Segundo_nombre=@Segundo_nombre,Primer_apellido=@Primer_apellido,Segundo_apellido=@Segundo_apellido,RTN=@RTN,Telefono=@Telefono WHERE ID_persona=@ID_persona',

    getAllClientes: 'SELECT * FROM Cliente',

    getAllClientes: 'SELECT * FROM Cliente',

    createNewCliente: 'INSERT INTO Cliente (ID_cliente, persona_ID, Email, Password, Nickname, fecha_registro) VALUES (@ID_cliente, @persona_ID, @Email, @Password, @Nickname, @fecha_registro)',

    getClienteById: 'SELECT * FROM Cliente WHERE ID_cliente = @ID_cliente',

    deleteCliente: 'DELETE FROM Cliente WHERE ID_cliente = @ID_cliente',

    updateClienteById: 'UPDATE Cliente SET persona_ID = @persona_ID, Email = @Email, Password = @Password, Nickname = @Nickname, fecha_registro = @fecha_registro WHERE ID_cliente = @ID_cliente'



    






};
