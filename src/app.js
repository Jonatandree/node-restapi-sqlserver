import express from 'express'
import config from './config'
import productsRoutes from './routes/products.routes'
import personaRoutes from './routes/Persona.routes'


const app= express()

//settings 
app.set('port', config.port )

//middlewares
app.use(express.json());
app.use(express.urlencoded({extended:false}));



app.use(productsRoutes)
app.use(personaRoutes)

export default app