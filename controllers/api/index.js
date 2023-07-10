const router = require('express').Router();
const userRoutes = require('./userRoutes');
const {Post} = require('../../models')
router.use('/users', userRoutes);

router.post('/post', (req, res) => {
    Post.create({...req.body, userId: req.session.userId}).then(data => {
        res.json(data)
    })
})

module.exports = router;