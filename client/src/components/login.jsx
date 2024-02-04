import {Box,styled,Button,Typography} from "@mui/material"
import { useState } from "react"
import axios from "axios"


const Container=styled(Box)`
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    width:50%;
    margin:auto;
`

const Input=styled('input')({
    width:"60%",
    height:"20px",
    marginTop:"10px"
})

const Submit=styled(Button)`
    width:20%;
    margin-top:10px;
`

const Label=styled(Typography)`
    text-align:left;
    font-size:20px;
    font-weight:600;
    color:#868686;
`
const Login=()=>{

    const [email,setEmail]=useState("");
    const [message,setMessage]=useState("");
    const handleClick= async ()=>{
        try{
            const response=await axios.post("http://localhost:4000/login",{email:email});

            if(response.status===201){
                setMessage("Check Your Inbox! Email Sent")
            }
        }catch(error){
            console.log("error in connecting")
            console.log(error.message);
        }
    }

    const handleChange=(e)=>{
        setEmail(e.target.value);
        setMessage("");
    }
    return (
        <div style={{display:"flex",alignItems:"center",height:"100vh"}}>
            <Container>
                <Label htmlFor="email">Enter Email</Label>
                <Input onChange={(e)=>{handleChange(e)}} id="email" type="email"/>
                <Submit onClick={()=>{handleClick()}} variant="contained">Submit</Submit>
                <Typography>{message}</Typography>
            </Container>
        </div>
    )
}

export default Login;