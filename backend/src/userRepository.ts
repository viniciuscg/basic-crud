import { PrismaClient } from "@prisma/client"

interface IUser {
    id: number,
    name: string
}

export class User {
    async create(name: string ) {                                                 
      const prisma = new PrismaClient()                                                 
      await prisma.user.create({                                                 
        data: {                                                 
          name,                                                 
        },                                                 
      })
    }

    async get() {
      const prisma = new PrismaClient()
      const user = await prisma.user.findMany()
      return user
    }

    async update({id, name}: IUser) {
      const prisma = new PrismaClient()
      const user = await prisma.user.update({ 
        where:{ 
          id,
        },
        data: {
          name,
        }
      })
      return user
    }

    async delete(id: number) {
      const prisma = new PrismaClient()
      const user = await prisma.user.delete({
        where:{
          id,
        }
      })
      return user
    }
}