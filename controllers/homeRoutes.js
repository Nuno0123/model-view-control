const router = require('express').Router();
const { User, Post } = require('../modules');
const withAuth = require('../utils/author');

router.get('/', async (req, res) => {
  try {
    const postData = await Post.findAll({
        includes: [User]
    });


    const posts = postData.map((project) => project.get({ plain: true }));
    res.render('homepage', {
        posts,
        logged_in: req.session.logged_in,
    });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/login', (req, res) => {
    if(req.session.logged_in) {
        res.redirect('/');
        return;
    }

    res.render('login');
});

router.get('/signup', (req, res) => {
    if (req.session.logged_in) {
        res.redirect('/');
        return;
    }

    res.render('signup');
})

router.get('/dashboard', withAuth, (req, res) => {
    res.render('dashboard')
})
module.exports = router;