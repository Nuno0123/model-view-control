const User = require('./user');
const Post = require('./Post')

Post.belongsTo(User, {
    foreignKey: 'userId',
    onDelete: 'CASCADE'
})

module.exports = { User, Post };