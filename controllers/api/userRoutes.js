const router = require('express').Router();
const { User } = require('../../models');

// this is at the /api endpoint

// route to verify user login credentials
router.post('/login', async (req, res) => {
    try {

      // validating username
      const userData = await User.findOne({ where: { username: req.body.username } });
      if (!userData) {
        res
          .status(400)
          .json({ message: 'Incorrect username, please try again' });
        return;
      }

      //validating password based on user credentials
      const validPassword = await userData.checkPassword(req.body.password);

      if (!validPassword) {
        res
          .status(400)
          .json({ message: 'Incorrect password, please try again' });
        return;
      }

      req.session.save(() => {
        req.session.user_id = userData.id;
        req.session.logged_in = true;
        
        res.json({ user: userData, message: 'You are now logged in!' });
      });

      console.log(`\n User id:  ${req.session.user_id} \n`);
      console.log(`\n Logged in? ${req.session.logged_in} \n`);

      // render homepage if valid credentials given by user
      res.render('home');

    } catch (err) {
      res.status(400).json(err);
    }
  });



// Create new user upon submission in user registration form

router.post('/registerUser', async (req, res) => {
    try {
        const userData = await User.create(req.body);

        // save user_id and logged_in into session
        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.logged_in = true;
      
            res.status(200).json(userData);
          });

        // render homepage if valid credentials are given
        res.render('home');
    } catch (err) {
        res.status(400).json(err);
    }
});



// // user logout route
// router.post('/logout', (req, res) => {
//     console.log(`\n  THIS HERE Before: ${req.session.logged_in}  \n`);
//     if (req.session.logged_in) {
//         req.session.destroy(() => {
//             res.status(204).end();
//         });
//     } else {
//         res.status(404).end();
//     }
//     console.log(`\n After: ${req.session.logged_in} \n`);
// });


router.post('/logout', (req, res) => {
    console.log(`\n Before: ${req.session.logged_in}  \n`);
    
    if (req.session.logged_in) {
        res.render('login');
    }
    
// });









// // POST - create a new user
// router.post('/', async (req, res) => {
//     try {
//         console.log(`\n Making new user: ${req.body.username} \n`);

//         const userData = await User.create(req.body);

//         res.status(200).json(userData);

//     } catch (err) {
//         res.status(400).json(err);
//     }
// });


// // PUT - modify a user by its 'id' value
// router.put('/:id', async (req, res) => {
//     try {

//         const userData = await User.update(
//             // set all attributes of user to values passed in to req.body
//             { username: req.body.username,
//               email: req.body.email,
//               password: req.body.password },
//               { individualHooks: true, 
//                 where: {id: req.params.id} 
//             }
//         )
//         // if wrong id entered
//         if (!userData) {
//             res.status(404).json({message: 'no user found with this id'});
//         } else {
//             console.log(`\n Editing record id: ${req.body.id} \n`);
//             res.status(200).json(userData);
//         }


//     } catch (err) {
//         res.status(400).json(err)
//     }
// })


// // DELETE - delete a user by its 'id' value
// router.delete('/:id', async (req, res) => {
//     try {
//         const userData = await User.destroy({
//             where: { id: req.params.id }
//         });

//         // if wrong id entered
//         if (!userData) {
//             res.status(404).json({message: 'no user found with this id'});
//         } else {
//             console.log(`\n Deleting user with id: ${req.params.id} \n`);
//             res.status(200).json(userData);
//         }

//     } catch (err) {
//         res.status(500).json(err);
//     }
// })


module.exports = router;