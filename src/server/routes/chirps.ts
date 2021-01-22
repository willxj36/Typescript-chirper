import * as express from 'express';
const { GetChirp, GetChirps, CreateChirp, UpdateChirp, DeleteChirp} = require('../chirpstore.js'); //would not accept this as an import statement
const router = express.Router();

router.get('/:id?', (req, res) => {
    let id = req.params.id;
    if(id) {
        res.json(GetChirp(id));
    } else {
        res.send(GetChirps());
    }
})

router.post('/', (req, res) => {
    let chirp: Chirp = req.body;
    CreateChirp(chirp);
    res.sendStatus(200);
})

router.put('/:id', (req, res) => {
    let id = req.params.id;
    let chirp: Chirp = req.body;
    UpdateChirp(id, chirp);
    res.send('Chirp updated successfully!');
})

router.delete('/:id', (req, res) => {
    let id = req.params.id;
    DeleteChirp(id);
    res.send('Chirp deleted successfully!');
})

interface Chirp {
    name: string,
    text: string
}

export default router;