import express from 'express';
import cors from 'cors'
const app = express();
const port = 8080;
import * as cadets from './data.js'

const corsOptions = {
    origin: true
}
app.use(cors(corsOptions));

// express.get

app.get('/', (req, res) => res.send('Success!'));

app.get('/en/personal_info', (req, res) => {
    res.json(cadets.personalInformation[req.query.cin]);
});

app.get('/en/cadet_info', (req, res) => {
    res.json(cadets.cadetInformation[req.query.cin]);
});

app.get('/en/membership_history', (req, res) => {
    res.json(cadets.membershipHistory[req.query.cin]);
});

app.get('/en/appointment_history', (req, res) => {
    res.json(cadets.appointmentHistory[req.query.cin]);
});

app.get('/en/group_history', (req, res) => {
    res.json(cadets.groupHistory[req.query.cin]);
});

app.get('/en/awards_history', (req, res) => {
    res.json(cadets.awardsHistory[req.query.cin]);
});

app.get('/en/qualifications', (req, res) => {
    res.json(cadets.qualifications[req.query.cin]);
});

app.get('/en/local_training', (req, res) => {
    res.json(cadets.localTraining[req.query.cin]);
});

app.get('/en/summer_training', (req, res) => {
    res.json(cadets.summerTraining[req.query.cin]);
});

// express.use

app.use(express.json()); // to parse JSON bodies


// express.post

app.post('/cadets', (req, res) => {
    const newCadet = req.body;
    res.json({ message: 'Cadet added successfully', cadet: newCadet });
});

app.listen(port, () => console.log(`App listening on port ${port}!`));
