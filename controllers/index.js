//Index.js file tells the server WHERE to find your routes
//A route is telling the browser what to do at a particular URL
const router = require('express').Router();

const apiRoutes = require('./api');
//building an object in homeRoutes that contains a bunch of routes. Import this router object to be used by express
//all these routes are like a table of content for all available routes
const homeRoutes = require('./homeRoutes');
const testRoutes = require('./testRoutes');
//./testRoutes is the condiments for the testRoutes


router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/test', testRoutes)

module.exports = router;