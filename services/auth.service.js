const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

require('dotenv').config();
const bcrypt = require('bcryptjs');
const jwt = require('../utils/jwt');

class authService {

    static async register(data) {

        const { email } = data;
        const check =  await prisma.findOne({
            where: { email }
        })

        if(check) {
            throw createError.Conflict('User with email address already exist')
        }

        data.password = bcrypt.hashSync(data.password, 8);
        const user = prisma.user.create({
            data
        })

        user.accessToken = await jwt.signAccessToken(user);
        
        return user;
    }
}

module.exports = authService;