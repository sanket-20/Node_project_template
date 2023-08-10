const express = require('express');
const { ServerConfig, Logger} = require('./src/config');
const apiRoutes = require('./src/routes');

const { AboutController, HomeController } = require('./src/controllers');
const { error } = require('winston');
const app = express();


app.use('/api', apiRoutes);

  
app.listen(ServerConfig.PORT, ()=>{
    console.log(`Successfully started the server on PORT : ${ServerConfig.PORT}`);
});
