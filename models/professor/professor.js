import moment from 'moment'
import mongoose, { mongo } from 'mongoose'

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
    },
    in_school_role : {
        type : String,
        enum : ["MainJuin", "Subjuin", "User"],
        default : "User",
    },
    out_school_role : {
        type : Date,
        default : moment().format("YYYY-MM-DD hh:mm:ss")
    },
    thesis_performance : {

    },
    patent_perfromance : {

    },
    academic_activities : {
        
    },
    awards: {

    }
});

const User = mongoose.model("user", UserSchema);

export default User;