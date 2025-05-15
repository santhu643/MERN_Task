const mongoose = require("mongoose");
const URI = "mongodb+srv://oggy:MmxqrkPbhAXpPzRq@database.9s4d3kt.mongodb.net/?retryWrites=true&w=majority&appName=database";

async function main(){
    await mongoose.connect(URI,{
        dbName:"sample_mflix"
    });
}

main().then(()=>{
    console.log("db connected");
})