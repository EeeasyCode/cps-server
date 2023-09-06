import express from 'express';

const router = express.Router();

router.get('/', async(req, res) => {
    
    res.json("http packet test");
})

router.post('/add', async(req, res, next) => {
    try {
        const { text1, text2, text3 } = req.body;
        
        res.json(text1, text2, text3);
    } catch (e) {
        console.log(e);
    }
})

export default router