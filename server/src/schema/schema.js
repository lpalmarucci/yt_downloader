import { gql } from "apollo-server-express";

import * as User from './typeDefs/User'
import * as Auth from './typeDefs/Auth'
import * as Download from './typeDefs/Download'

const Queries = [];
const typeDefs = [];
const Mutations = [];

const schemas = [User, Auth, Download];

schemas.forEach(schema => {
    Queries.push(schema.Query);
    typeDefs.push(schema.typeDefs);
    Mutations.push(schema.Mutation);
})

export default gql`
    type Query{${Queries.join('\n')}}

    ${typeDefs.join('\n')}

    type Mutation{${Mutations.join('\n')}}
`

