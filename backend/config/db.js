const mongoose = require('mongoose');

const connectDB = async () => {
    await mongoose.connect("mongodb+srv://dearjhon977:guru@cluster0.quq9f.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0").then(() => {
        console.log('Database connected');
    }).catch((error)=>{
        console.log(error);
    })
};
module.exports = connectDB;