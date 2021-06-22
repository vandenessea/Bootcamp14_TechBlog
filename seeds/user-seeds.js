const { User } = require('../models');

const userData = [
    {
        username: 'Bear',
        email: 'Reabs@hotmail.com',
        password: '6996'
    },
    {
        username: 'CheeryMaid',
        email: 'MadeC@gmail.com',
        password: '9669'
    }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;