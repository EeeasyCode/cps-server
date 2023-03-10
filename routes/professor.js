import express from 'express';

import Professor from '../models/professor/professor';

const router = express.Router();

router.get('/', async(req, res) => {
    const professorProfile = await Professor.find();
    console.log(professorProfile);
    res.json(professorProfile);
})

router.post('/add', async(req, res, next) => {
    try {
        const { name, email, phone_number } = req.body;
    const addProfile = await Professor.create({
        name, email, phone_number
    });
    res.json(addProfile);
    } catch (e) {
        console.log(e);
    }
})
export default router