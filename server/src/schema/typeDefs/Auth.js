
export const Query = `
    helloAuth: String
    logout(token: String!): LoginResponse
`

export const typeDefs = `
    input Credentials{
        email: String!,
        password: String!
    }

    type LoginResponse{
        accessToken: String!,
        refreshToken: String!,
        username: String!
    }


`
export const Mutation = `
    login(email: String!, password: String!): LoginResponse!
`