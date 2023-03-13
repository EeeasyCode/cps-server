import express from 'express';

import Patent from '../models/professor/patent'

const router = express.Router();

router.get('/', async(req, res) => {
    const patentProfile = await Patent.find();
    console.log(patentProfile);
    res.json(patentProfile);
})

router.post('/add', async(req, res, next) => {
    try {
        const { year, kr_title, en_title, kr_organization, en_organization } = req.body;
        const addData = await Patent.create({
            year, kr_title, en_title, kr_organization, en_organization
        });
        res.json(addData);
    } catch (e) {
        console.log(e);
    }
})

export default router