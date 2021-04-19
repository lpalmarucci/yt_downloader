import User from '../../models/User'
import {compare} from 'bcrypt'
import {createAccessToken, createRefreshToken} from '../../../utils/auth'
import { checkToken } from '../../auth'

export default {
    Query: {
        helloAuth: () => "hi auth",
        logout: (_, {token}) => {
            const payload = checkToken(token);
            
            return {
                accessToken : ""
            }
        }
    },
    Mutation: {

        login: async (_, { email, password }, { req, res }) => {
            const user = await User.findOne({ email });
            if (!user) {
                throw new Error(`Nessun utente trovato per ${email}`);
            }
            const pwdCheck = await compare(password, user.password);
            if (!pwdCheck) {
                throw new Error("Password non valida!");
            }
            //refresh token
            const refreshToken = createRefreshToken(user);
            
            res.setHeader('Access-Control-Allow-Origin',process.env.ORIGIN);
            res.cookie('jid', refreshToken, { httpOnly: true, path : '/', expires: new Date(Date.now() + 9000000)});

            const token = createAccessToken(user);
            return {
                accessToken: token,
                refreshToken: refreshToken,
                username: user.username
            };
        },
    }
} 