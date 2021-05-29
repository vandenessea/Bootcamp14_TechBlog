const router = require('express').Router();
const { User, BlogPost, Comment } = require('../../models');

// this is at the /api endpoint




// POST - create a new blog post
router.post('/', async (req, res) => {
    try {
        console.log(`\n Making new blog post: ${req.body.title} \n`);

        const bpData = await BlogPost.create(req.body);

        res.status(200).json(bpData);

    } catch (err) {
        res.status(400).json(err);
    }
});


// PUT - modify a blog post by its 'id' value
router.put('/:id', async (req, res) => {
    try {

        const bpData = await BlogPost.update(
            // set all attributes of blog posts to values passed in to req.body
            { title: req.body.title,
              content: req.body.content,
              user_id: req.body.user_id },
              { where: {id: req.params.id} }
        )

        // if wrong id entered
        if (!bpData) {
            res.status(404).json({message: 'no blog post found with this id'});
        } else {
            console.log(`\n Editing blog post record id: ${req.params.id} \n`)
            res.status(200).json(bpData);
        }
        

    } catch (err) {
        res.status(400).json(err)
    }
})


// DELETE - delete a blog post by its 'id' value
router.delete('/:id', async (req, res) => {
    try {
        const bpData = await BlogPost.destroy({
            where: { id: req.params.id }
        });

        // if wrong id entered
        if (!bpData) {
            res.status(404).json({message: 'no blog post found with this id'});
        } else {
            console.log(`\n Deleting blog post with id: ${req.params.id} \n`);
            res.status(200).json(bpData);
        }

    } catch (err) {
        res.status(500).json(err);
    }
})


module.exports = router;