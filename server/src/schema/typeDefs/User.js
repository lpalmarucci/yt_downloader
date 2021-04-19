
export const Query = `
    hiUser: String
    getUser(id: String!): [User!]!
    users: [User!]
`

export const typeDefs = `
    type User{
        id: ID!
        username: String!
        email: String!
        password: String!
    }

`
export const Mutation = `
    createUser(email: String, username: String, password: String): User!
`