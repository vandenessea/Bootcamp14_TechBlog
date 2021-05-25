const router = require('express').Router();
const { User, BlogPost, Comment } = require('../models');

// GET - all users
router.get('/users', async (req, res) => {
    try {
        console.log(`\n Getting all user data \n`);

        const userData = await User.findAll();
        res.status(200).json(userData);        
        
    } catch (err) {
        res.status(500).json(err);
    }
});


// GET - user by id with associations to blogposts and comments
router.get('/users/all/:id', async (req, res) => {
    try {
        console.log(`\n Getting data for user with id: ${req.params.id} \n`)

        const userData = await User.findByPk(req.params.id, {
            // this JOINS with BlogPost and Comment
            include: [ 
                { model: BlogPost },
                { model: Comment } 
            ]     
        });

        // check to see if user data was returned
        if(!userData) {
            res.status(404).json({ message: 'No users found with this id'} );
        } else {
            res.status(200).json(userData);
        }

    } catch (err) {
        res.status(500).json(err);
    }
});

// GET - all blog posts
router.get('/blogposts', async (req, res) => {
    try {
        console.log(`\n Getting all blog post data \n`);

        const bpData = await BlogPost.findAll();
        res.status(200).json(bpData);
    } catch (err) {
        res.status(500).json(err);
    }
});

// GET - blog post by id with associations to users and comments
router.get('/blogposts/all/:id', async (req, res) => {
    try {
        console.log(`\n Getting data for blog post with id: ${req.params.id} \n`);

        const bpData = await BlogPost.findByPk(req.params.id, {
            //this JOINS with User and Comment
            include: [
                { model: User },
                { model: Comment }
            ]
        });

        // check to see if blog post data was returned
        if(!bpData) {
            res.status(404).json({ message: 'No blog posts found with this id'} );
        } else {
            res.status(200).json(bpData);
        }
        
    } catch (err) {
        res.status(500).json(err);
    }
})


// GET - all comments
router.get('/comments', async (req, res) => {
    try {
        console.log(`\n Getting all comment data \n`);

        const commentData = await Comment.findAll();
        res.status(200).json(commentData);
    } catch (err) {
        res.status(500).json(err);
    }
});


// GET - comment by id with associations to User and BlogPost
router.get('/comments/all/:id', async (req, res) => {
    try {
        console.log(`\n Getting data for comment with id: ${req.params.id} \n`)

        const commentData = await Comment.findByPk(req.params.id, {
            include: [
                { model: User },
                { model: BlogPost }
            ]
        });

        // check to see if comment data was returned
        if(!commentData) {
            res.status(404).json({ message: 'No comments found with this id'} );
        } else {
            res.status(200).json(commentData);
        }

    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;