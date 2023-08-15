import express from 'express';
import cors from 'cors'
const app = express();
const port = 8080;
import * as cadets from './data.js'
import { validateAuthToken } from './authvalidate.js';

function returnAuthError(err, res) {
    res.status(err[0])
    res.send(err[1])
    console.log(err[1])
}
const corsOptions = {
    origin: true
}
app.use(cors(corsOptions));

// express.get

app.get('/', (req, res) => res.send('Success!'));

app.get('/en/personal_info', (req, res) => {
    validateAuthToken(req.headers.authorization).then(() => {
        if (req.query.cin === undefined | req.query.cin === "") {
            res.json(cadets.personalInformation)
            console.log(req.headers.authorization)
        } else {
            res.json(cadets.personalInformation[req.query.cin]);
        }
    })
    .catch((err) => {
        returnAuthError(err, res)
    })
});

app.get('/en/cadet_info', (req, res) => {
    validateAuthToken(req.headers.authorization).then(() => {
        res.json(cadets.cadetInformation[req.query.cin]);
    })
    .catch((err) => {
        returnAuthError(err, res)
    })
});

app.get('/en/membership_history', (req, res) => {
    validateAuthToken(req.headers.authorization).then(() => {
        res.json(cadets.membershipHistory[req.query.cin]);
    })
    .catch((err) => {
        returnAuthError(err, res)
    })
});

app.get('/en/appointment_history', (req, res) => {
    validateAuthToken(req.headers.authorization).then(() => {
        res.json(cadets.appointmentHistory[req.query.cin]);
    })
    .catch((err) => {
        returnAuthError(err, res)
    })
});

app.get('/en/group_history', (req, res) => {
    validateAuthToken(req.headers.authorization).then(() => {
        res.json(cadets.groupHistory[req.query.cin]);
    })
    .catch((err) => {
        returnAuthError(err, res)
    })
});

app.get('/en/awards_history', (req, res) => {
    validateAuthToken(req.headers.authorization).then(() => {
        res.json(cadets.awardsHistory[req.query.cin]);
    })
    .catch((err) => {
        returnAuthError(err, res)
    })
});

app.get('/en/qualifications', (req, res) => {
    validateAuthToken(req.headers.authorization).then(() => {
        res.json(cadets.qualifications[req.query.cin]);
    })
    .catch((err) => {
        returnAuthError(err, res)
    })
});

app.get('/en/local_training', (req, res) => {
    validateAuthToken(req.headers.authorization).then(() => {
        res.json(cadets.localTraining[req.query.cin]);
    })
    .catch((err) => {
        returnAuthError(err, res)
    })
});

app.get('/en/summer_training', (req, res) => {
    validateAuthToken(req.headers.authorization).then(() => {
        res.json(cadets.summerTraining[req.query.cin]);
    })
    .catch((err) => {
        returnAuthError(err, res)
    })
});

// express.use

app.use(express.json()); // to parse JSON bodies


// express.post

app.post('/cadets', (req, res) => {
    const newCadet = req.body;
    res.json({ message: 'Cadet added successfully', cadet: newCadet });
});

app.listen(port, () => console.log(`App listening on port ${port}!`));
