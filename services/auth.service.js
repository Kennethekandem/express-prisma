const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

class authService {

    static async register(data) {

        const { email } = data;
        const check =  await prisma.findOne({
            where: { email }
        })

        if(check) {
            throw createError.Conflict('User with email address already exist')
        }
        const user = prisma.user.create({
            data
        })
        
        return user;
    }
}

module.exports = authService;