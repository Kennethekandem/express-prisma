const auth = require('../services/auth.service');
const createError = require('http-errors');

class authController {

    static register = async (req, res, next) => {

        try {

            const user = await auth.register(req.body);
            res.status(200).json({
                status: true,
                message: 'User created successfully',
                data: user
            })

        }
        catch (e) {
            next(createError(e.statusCode, e.message))
        }
    }
}

module.exports = authController;