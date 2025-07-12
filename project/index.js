const express = require('express');

const{connectToMongoDB} = reqiure ("./connect")


const urlRoute =require("./routes/url");
const URL = require ('./models/url');



 const app = express();
 const PORT =8001;

connectToMongoDB("mongodb://localhost:27017/short-url")
.then(()=> console.log("mongodb connected"));


//middlerware
app.use(express.json());


 app.use("/url", urlRoute);

 app.get('/:shortid ', async(req,res )=>{
    const shortID =req.params.shortID;
    const entry = await URL.findOneAndUpdate({
        shortID
    }, {$push:{
        visisthistory:{
            timestamp:Date.now(),
        }
    },
}
);
res.redirect(entry.redirectURL);

 });


 app.listen(PORT,() => console.log(`server started at PORT:${PORT}` ))