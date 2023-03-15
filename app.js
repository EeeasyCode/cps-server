import express from 'express';
import mongoose from "mongoose";
import config from './config';
import hpp from 'hpp';;
import helmet from 'helmet';
import cors from 'cors'
import morgan from 'morgan'
import ProfessorData from './routes/professor';
import PatnetData from './routes/patent';
import ResearchData from './routes/research';

const app = express()
const {MONGO_URL} = config
app.use(hpp())
app.use(helmet())

app.use(cors({origin : true, credentials : true}))
app.use(morgan("dev"))

app.use(express.json())


mongoose.connect(MONGO_URL, {
    useNewUrlParser : true,
    useUnifiedTopology: true,   
}).then( ()=> console.log("MongoDB connecting Success!!!")).catch((e)=> console.log(e));

app.get('/');
app.use('/api/professor', ProfessorData);
app.use('/api/patent', PatnetData);
app.use('/api/research', ResearchData);

export default app;