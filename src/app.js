    const express = require('express');
    const app = express();
    const {createServer} = require('http');
    const initSocket = require('./socket/init');
    const path = require('path');
    const envPath = path.join(__dirname,'../.env')
    const dotenv = require('dotenv');




    dotenv.config({path:envPath})
    const httpServer = createServer(app)
    initSocket(httpServer)

    app.use(express.static(path.join(__dirname, '../public')))

    app.get('/', (req, res) => {
        res.json('Hello World')

    })


    httpServer.listen(process.env.PORT  ,()=>{
        console.log("server is running");
    })