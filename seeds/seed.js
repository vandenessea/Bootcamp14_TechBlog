const sequelize = require('../config/connection');
const { User, BlogPost } = require('../Models');

const userData = require('./userData.json');
const blogpostData = require('./blogpostData.json');

const seedDatabase = async () => {
    await sequelize.sync({ force: true });

    const users = await User.bulkCreate(userData, {
        individualHooks: true,
        returning: true,
    });

    for (const post of blogpostData) {
        console.log(`\n ${post} \n`);
        await BlogPost.create({
            ...post,
            user_id: users[Math.floor(Math.random() * users.length)].id,    //assigns random user ID to each blog post
        });
    };

    process.exit(0);
}

seedDatabase();