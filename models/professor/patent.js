import mongoose from 'mongoose'

// Create Schema  //데이터모델을 스키마라 함
const PatentSchema = new mongoose.Schema({
    year: {
        type: String,
        required: true,
    },
    kr_title : {
        type : String,
    },
    en_title :{
        type : String,
        required : true,
    },
    kr_organization: {
        type : String,
        required : true,
    },
    en_organization: {
        type : String,
        required : true,
    }
});

const patent = mongoose.model("patent", PatentSchema);

export default patent;