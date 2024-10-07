import { NextApiRequest,NextApiResponse } from "next";
import connectDB from "./db";
import Task from "./models/task";
export default async function handler(req:NextApiRequest,res:NextApiResponse){
    await connectDB();

    if(req.method === 'GET'){
        try{
            const tasks = await Task.find();
            res.status(200).json(tasks);
        } catch(error){
            res.status(500).json({error:'Failed to fetch'});
        }
    }
    else{
        res.status(405).json({error:'Method not allowed'});
    }
}