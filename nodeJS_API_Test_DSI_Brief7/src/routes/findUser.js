const { User } = require('../db/sequelize');

module.exports = (app) => {
    app.get('/user_tests/:id', (req, res) => {
        User.findByPk(req.params.id)
        .then(users => {
            const message = 'Un user a bien été trouvé.'
            res.json({message, data: users})
        })
    })
}