//import models
const User = require('./User');
const BlogPost = require('./BlogPost');

User.hasMany(BlogPost, {                                // User has one>many relationship to BlogPost. One user can have many blog posts
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
});

BlogPost.belongsTo(User, {                              // BlogPost has many>one relationship to User. Many blog posts can belong to one user.
    foreignKey: 'user_id'
});

module.exports = { User, BlogPost };