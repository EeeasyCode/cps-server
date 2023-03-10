import mongoose from 'mongoose'

// Create Schema  //데이터모델을 스키마라 함
const ProfessorSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true,
    },
    email :{
        type : String,
        required : true,
        unique : true,
    },
    phone_number: {
        type : String,
        required : true,
    }
});

const Professor = mongoose.model("professor", ProfessorSchema);

export default Professor;