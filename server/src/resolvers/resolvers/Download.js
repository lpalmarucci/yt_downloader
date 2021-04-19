import User from '../../models/User'
import { hash, compare } from 'bcrypt'
import { sign, verify } from 'jsonwebtoken'
import {createRefreshToken, createAccessToken} from '../../../utils/auth'

export default {
    Query: {
        hiDownload: () => 'hi download',
        downloadVideo: () => ("ciao")
    }
}