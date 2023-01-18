import Fastify from 'fastify'
import { PrismaClient } from '@prisma/client'
import cors from '@fastify/cors'
import { SubscriptionCreation } from './types'

const prisma = new PrismaClient({
  log: ['query']
})

async function bootstrap() {
  
  const fastify = Fastify({
    logger: true
  })

  await fastify.register(cors, {
    origin: true,
    credentials: false
  })

  fastify.get('/subscription', async () => {
    const subscription = await prisma.subscription.findMany({
      select: {
        id: true,
        email: true,
        updatedAt: true,
        subscription_active: true,
        createdAt: true,
      }
    })
    return { subscription }
  })

  fastify.route({
    method: 'POST',
    url: '/subscription',
    handler: async (req, res) => {
      try {
        const { id,
          email,
          updatedAt,
          subscription_active,
          createdAt,
        } = req.body as SubscriptionCreation

        const subscriptionPost = await prisma.subscription.create({
          data: {
            id,
            email,
            updatedAt,
            subscription_active,
            createdAt,
          }
        })
        res.send(subscriptionPost)
      } catch (err) {
        throw err
      }
    }
  })

  await fastify.listen({ port: 3333 })

  console.log('App Running At: http://localhost:3333/')
}

bootstrap()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
