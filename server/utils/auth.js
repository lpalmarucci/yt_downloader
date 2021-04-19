import { sign } from 'jsonwebtoken'

export const createAccessToken = (user) => {
    return sign({ jid: user.id }, process.env.SECRET_KEY, { expiresIn: "15m" })
}

export const createRefreshToken = (user) => {
    return sign({ jid: user.id }, process.env.SECRET_KEY, { expiresIn: "7d" })
}