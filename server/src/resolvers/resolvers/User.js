import User from '../../models/User'
import { hash, compare } from 'bcrypt'
import { sign, verify } from 'jsonwebtoken'
import {createRefreshToken, createAccessToken} from '../../../utils/auth'

export default {
    Query: {
        hiUser: () => 'hi',
        getUser: (obj, { emal, password }, context, info) => {
            return User.find({ _id: args.id })
        },
        users: () => User.find()
    },
    Mutation: {
        createUser: async (_, { email, username, password }) => {
            const hashedPwd = await hash(password, 12);
            return new User({ email, username, password: hashedPwd }).save();
        },
    }
}