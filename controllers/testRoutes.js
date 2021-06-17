const router = require('express').Router();
const { User, BlogPost, Comment } = require('../models');
//Line 2 is importing tables from the database


//This is a test route. This prints data
router.get('/test1', (req, res) => {
    const response = 'this is a test';
    console.log(response)
    res.status(200).json(response)
})

//Now were going to get all blog post data
router.get('/blogData', async (req,  res) => {
    const blog_post_data = await BlogPost.findAll()
    // BlogPost.findAll() us like the SQL statement: SELECT * FROM BlogPost
    res.status(200).json(blog_post_data)
})

//This will give us blog post data, and author data of each particular blog post
router.get('/blogAuthordata', async (req, res) => {
    const blog_author_data = await BlogPost.findAll({//Find all gets all the info, and then the user table too
        include:[{model:User}]//Saying incude the user model/table in the results
    })
    res.status(200).json(blog_author_data)
})

//Get user about a specific blog post
router.get('/blogpost/:id', async (req, res) => {
    const blog_author_specific_data = await BlogPost.findAll({
        include:[{model:User}]
    })
    res.status(200).json(blog_author_specific_data)
})

















module.exports = router;