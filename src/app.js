import express from 'express'
import config from './config'
import productsRoutes from './routes/products.routes'
import personaRoutes from './routes/Persona.routes'
import mensajeRoutes from './routes/mensaje.routes'


const app= express()



//settings 
app.set('port', config.port )

//middlewares
app.use(express.json());
app.use(express.urlencoded({extended:false}));



app.use(productsRoutes)
app.use(personaRoutes)
app.use(mensajeRoutes)

app.set('view engine', 'ejs'); // Configura EJS como motor de plantillas
app.set('views', __dirname + '/views'); // Cambia 'vistas' por 'views'
export default app