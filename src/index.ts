import express from 'express'; 
const app = express();
app.use(express.json())//middleware que transformar el body en un json

const port:number = 3000;
app.get('/ping',(_req,res)=>{
    console.log('tamo en ping');
    res.send('pong');
});

//inicio del server
app.listen(port, ()=>{
    console.log(`Servidor iniciado en: http://localhost:${port}`)
})