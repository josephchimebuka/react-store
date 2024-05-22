import express from 'express'

const app = express();

app.get('/', (req, res)=>{
    res.send('App is running...')
})
app.post("/products",(res, req)=>{
   res.send('')
})
app.listen(5000, console.log('app is running ...'))