import { ApolloServer } from 'apollo-server-express'
import express from 'express'
import schema from './schema/schema'
import resolvers from './resolvers/resolvers'
import { login, logout } from './auth'
//utils
 import dbConnect from '../utils/dbConnect'

import bodyParser from 'body-parser';
import dotenv from 'dotenv'
import cors from 'cors'
import cookieParser from 'cookie-parser'

dotenv.config();
dbConnect();

const app = express()
app.use(cors({
    origin: process.env.ORIGIN,
    credentials: true,
    allowedHeaders: ['Content-Type', 'Authorization'],
}));
app.use(cookieParser());

const server = new ApolloServer({
    typeDefs: schema,
    resolvers: resolvers,
    context: ({ req, res }) => ({ req, res }),
})

server.applyMiddleware({ app })

app.listen(4000, () => {
    console.log(`Server listening on http://localhost:4000${server.graphqlPath}`);
})