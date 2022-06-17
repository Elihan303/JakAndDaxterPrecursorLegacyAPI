import express from 'express'; 
const app = express();
app.use(express.json())//middleware que transformar el body en un json

import characters from './routes/characters';

const port:number = 3000;

//Characters router
app.use('/api/characters', characters);

//inicio del server
app.listen(port, ()=>{
    console.log(`Servidor iniciado en: http://localhost:${port}`)
})