
import AuthResolver from './resolvers/Auth'
import UserResolver from './resolvers/User'
import DownloadResolver from './resolvers/Download'

export default {
    Query:{
        ...AuthResolver.Query,
        ...UserResolver.Query,
        ...DownloadResolver.Query
    },
    Mutation:{
        ...AuthResolver.Mutation,
        ...UserResolver.Mutation,
        ...DownloadResolver.Mutation
    }
}
