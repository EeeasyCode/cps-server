import mongoose from "mongoose";

const ResearchSchema = new mongoose.Schema({
    year: {
        type: String,
        required: true
    },
    title: {
        type: String,
    },
    organization: {
        type: String,
    },
})

const Research = mongoose.model("research", ResearchSchema);

export default Research;