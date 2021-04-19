
import { } from 'redux'

const AuthenticationReducer = (state = { isLoggedIn: false, username: '' }, action) => {
    switch (action.type) {
        case 'login':
            return {
                isLoggedIn: true,
                username: action.params.user
            }
        case 'logout':
            return {
                isLoggedIn: false,
                username : ''
            }
        default:
            return state;
    }
}

export default AuthenticationReducer