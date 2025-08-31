import dotenv from 'dotenv';
import express from 'express';
import jokes from './jokes.js';

dotenv.config();

const app = express();

app.use(express.static('dist'));


app.get('/',(req,res)=>{
    res.send('Server is ready.')
});


// get a list of 5 jokes
app.get('/api/jokes', (req,res) => {
    res.json(jokes)
});


const port = process.env.PORT || 3000;
app.listen(port, ()=> {
    console.log(`Server is runnig on ${port}`);
    
});