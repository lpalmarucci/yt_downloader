import {verify} from 'jsonwebtoken'

export const checkToken = (token) => {
    const payload =  verify(token, process.env.SECRET_KEY)
    console.log(`checkAuthentication ${JSON.stringify(payload)}`);
    return payload;
}