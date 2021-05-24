const { User } = require('../models');

const userData = [
    {
        username: 'yuiruprup',
        email: 'yuiruprup@hotmail.com',
        password: '12345'
    },
    {
        username: 'epurpur',
        email: 'epurpur@gmail.com',
        password: 'abcde'
    }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;