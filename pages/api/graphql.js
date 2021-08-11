// pages/api/graphql.js
import { ApolloServer, gql } from 'apollo-server-micro'
import { makeExecutableSchema } from 'graphql-tools'
import { MongoClient } from 'mongodb'
import { PrismaClient } from '@prisma/client'
import { json } from 'micro'

require('dotenv').config()

const typeDefs = gql`
  type Query {
    charity: [Charity]
  }
  type Charity {
      organisation_number: Int
      registered_charity_number: Int
      charity_registration_status: String
      charity_name: String
      latest_income: Int
      latest_expenditure: Int
      charity_contact_email: String
      charity_contact_web: String
  }
`

const resolvers = {
  Query: {
    charity: async (_parent, _args, _context, _info) => {
        // return _context.db
        // .collection('charity')
        // .find({}).toArray()
        const charities = await _context.prisma.charity.findMany()
        console.log(charities)
        return charities
    },
  },
}

const prisma = new PrismaClient()

const schema = makeExecutableSchema({
    typeDefs,
    resolvers,
})

let db

// const apolloServer = new ApolloServer({
//     schema,
//     context: async () => {
//       if (!db) {
//         try {
//           const dbClient = new MongoClient(process.env.MONGO_DB_URI,
//             {
//               useNewUrlParser: true,
//               useUnifiedTopology: true,
//             }
//           )
  
//           await dbClient.connect()
//           db = dbClient.db('charities-extract-1000') // database name
//         } catch (e) {
//           console.log('--->error while connecting with graphql context (db)', e)
//         }
//       }
  
//       return { db }
//     },
//   })

const apolloServer = new ApolloServer({
    schema,
    context: {
      prisma
    },
  })

// await apolloServer.start();
const startServer = apolloServer.start()

// export default apolloServer.createHandler({ path: '/api/graphql' })

export default async function handler(req, res) {
    res.setHeader('Access-Control-Allow-Credentials', 'true')
    res.setHeader(
      'Access-Control-Allow-Origin',
      'https://studio.apollographql.com'
    )
    res.setHeader(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept'
    )
    if (req.method === 'OPTIONS') {
      res.end()
      return false
    }
  
    await startServer
    await prisma.$connect()
    await apolloServer.createHandler({
      path: '/api/graphql',
    })(req, res)
  }

  export const config = {
    api: {
      bodyParser: false,
    },
  }