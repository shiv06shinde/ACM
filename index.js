const express = require('express');

const app = express();


app.use('/',(req,res,next)=>{
	res.send("HELLO WORLD");
	next();
});

app.listen(3000).
then(console.log("application started")).catch(e => {console.log("ERROR",e);});

