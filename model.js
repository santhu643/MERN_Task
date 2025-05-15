const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const scretKey = 'summa';
const studentSchema = new mongoose.Schema({
    email:String,
    pass:String
},{
    timestamps:true
});
const student = mongoose.model('student',studentSchema);

async function register(email,pass) {
    const data = new student({email,pass});
    data.save();
    return data;
}


async function login(email,pass) {
    const data = await student.findOne({email});
    if(!data){
        return "Invalid user";
    }
    const data1 = await bcrypt.compare(pass,data.pass);
    if(!data1){
        return "Invalid password";
    }

    const token = jwt.sign(
        {id:data._id,email:data.email},
        scretKey ,
        {
            expiresIn :'1h'
        }
    )
    return token;
}

module.exports = 
{register,login};
