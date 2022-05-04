require('dotenv').config();
const {connectDB} = require('./configs/db')
connectDB();
const {errorHandler} = require('./middlewares/errorHandle');
const express = require('express');
const app = express();





const cors = require('cors');
app.use(cors());
app.use(express.json());

const authRoute = require('./routes/authRoute');
const postRoute = require('./routes/postRoute');
const categoryRoute = require('./routes/categoryRoute');


app.use('/api/v1/auth', authRoute);
app.use('/api/v1/posts', postRoute);
app.use('/api/v1/categories', categoryRoute);

app.all('*',(req, res ,next)=>{
    const err = new Error('The route cant not be found');
    err.statusCode = 404;
    next(err);
})
app.use(errorHandler);


const port = process.env.APP_PORT;


 app.listen(port, ()=>{
     console.log(`Server is running on port ${port}`);
 })