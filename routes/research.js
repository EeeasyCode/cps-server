import express from 'express';

import Research from '../models/professor/research'

const router = express.Router();

router.get('/', async(req, res) => {
    const researchProfile = await Research.find();
    console.log(researchProfile);
    res.json(researchProfile);
})

router.post('/add', async(req, res, next) => {
    try {
        const { year, title, organization } = req.body;
        const addData = await Research.create({
            year, title, organization
        });
        res.json(addData);
    } catch (e) {
        console.log(e);
    }
})

export default router