import express from "express"
import bodyParser from "body-parser"
import router from "./routes/router.js"
import cors from "cors"
import path from "path"

const __dirname=path.resolve();

const app=express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(router);



app.use(express.static(path.join(__dirname,"./client/build")));

app.get("*",(req,res)=>{
    res.sendFile(path.join(__dirname,"./client/build/index.html"));
})



const PORT=4000|| process.env.PORT;

app.listen(PORT,()=>{
    console.log(`Server started at ${PORT}`)
})