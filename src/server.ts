import express, { request } from 'express';
const app = express();


app.get('/',(request,response)=>{
    return response.json({message:'olá mundo'})
})
app.listen(8080);