import express from 'express';
import cors from 'cors'
const app = express();
const port = 8080;
import * as cadets from './data.js'

const corsOptions = {
    origin: true
}
app.use(cors(corsOptions));


app.get('/', (req, res) => res.send('Success!'));

app.get("/en/personal_info", (req,res) => {
   res.json(cadets.personalInformation[req.query.cin]);
});


app.use(express.json()); // Use this middleware to parse JSON bodies


app.post("/cadets", (req, res) => {
    const newCadet = req.body;
    res.json({ message: 'Cadet added successfully', cadet: newCadet });
});

app.listen(port, () => console.log(`App listening on port ${port}!`));