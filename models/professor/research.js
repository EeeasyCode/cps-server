import mongoose from "mongoose";

const ResearchSchema = new mongoose.Schema({
    year: {
        type: String,
        required: true
    },
    korean_title: {
        type: String,
        required: true
    },
    english_title: {
        type: String,
        required: true
    },
    korean_organization: {
        type: String,
        required: true
    },
    english_organization: {
        type: String,
        required: true
    }
})

const Research = mongoose.model("research", ResearchSchema);

export default Research;