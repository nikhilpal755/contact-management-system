import express from 'express'
import mongoose from 'mongoose'
import router from './routes/contact.js'
import dotenv from 'dotenv'
import cors from 'cors'
import morgan from 'morgan'

dotenv.config()

const app = express();
const port = process.env.PORT || 5000;

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(morgan('dev'));

// connect to mongodb
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log('MongoDB connected'))
.catch(err => console.log(err));


// routes
app.use('/contacts', router);

// start server
app.listen(port, () => console.log(`Server started on port ${port}`));