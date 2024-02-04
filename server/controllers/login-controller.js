import nodemailer from "nodemailer"



const Login = async (request,response) => {

    const {email}=request.body;
    let testAccount =await  nodemailer.createTestAccount();

    let  transporter = nodemailer.createTransport({
        service:"gmail",
        auth: {
            user: "mernstackmailer@gmail.com",
            pass: "wruh gcru fzcz qunh",
        },
    });

    let  message = {
        from: "yashkshatriya108@gmail.com", // sender address
        to: email, // list of receivers
        subject: "Subscribed", // Subject line
        text: "Thanks for Subscribing", // plain text body
    };

    transporter.sendMail(message).then((info)=>{
        return response.status(201).json({message:"Sent Mail Successfully",info:info.messageId,preview:nodemailer.getTestMessageUrl(info)})
    }).catch((error)=>{
        return response.status(500).json({message:error.message})
    })


}

export default Login;