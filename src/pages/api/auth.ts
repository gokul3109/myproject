import { NextApiRequest, NextApiResponse } from "next";
import connectDB from "./db";
import User from "./models/User";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    await connectDB();

    if(req.method === 'POST'){
        const {username, password} = req.body;
        
        if(req.url.includes('register')){
            try{
                const user = await User.create({username, password});
                res.status(201).json({message:'User registered successfully',user});
            }
            catch(error){
                res.status(400).json({message:'Error registering user', error});
            }
        }
        else if(req.url.includes('login')){
            const user = await User.findOne({username});
            if(user && user.password === password){
                res.status(200).json({message:'Logged in Successfully', user});
            } else{
                res.status(401).json({message:'Invalid credentials'});
            }
        }
    }
};

export default handler;