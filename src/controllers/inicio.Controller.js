
import {getConnection,sql,queries} from '../database'
import querys from '../database/query'

function login(email, password) {
  const user = fakeDatabase.find(cliente => cliente.Email === email && cliente.Password === password);
  return user ? user.ID_cliente : null;
}

// Ejemplo de uso
//const email = "cliente1@example.com";
//const password = "contraseña1";

const clientId = login(email, password);

if (clientId !== null) {
  console.log(`Inicio de sesión exitoso. ID del cliente: ${clientId}`);
} else {
  console.log("Credenciales incorrectas. Inicio de sesión fallido.");
}
