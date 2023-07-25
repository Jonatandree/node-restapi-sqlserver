import {config} from 'dotenv'
config();
console.log('hola')
console.log(process.env.PORT)


export default {
    port: process.env.PORT || 3000,
}