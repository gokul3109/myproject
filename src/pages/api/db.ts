import mongoose from 'mongoose';

const connectDB = async () =>{
    if( mongoose.connections[0].readyState){
        return;
    }
    try{
        console.log('MongoDB URI:', process.env.MongoDB_URI);
        await mongoose.connect(process.env.MONGODB_URI || '', {
            useNewUrlParser: true,
            UseUnifiedTopology: true,
        });
        console.log("connected to database");
    }   catch(error){
        console.error("error connecting to database");
        process.exit(1);
    }
};

export default connectDB;
