import React from 'react'

const loginMutation = `mutation LoginMutation($email: String!, $password: String!){
    login(email: $email, password: $password){
        accessToken
        refreshToken
        username
    }
}`

export default loginMutation