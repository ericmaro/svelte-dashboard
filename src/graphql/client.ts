import { UserModel } from '@/stores/user/types/user';
import { GraphQLClient, } from 'graphql-request'
const isBrowser = typeof window !== 'undefined'
const token = isBrowser?UserModel.getToken():null

  export  const graphQLClient = new GraphQLClient("http://139.162.250.175:3000/graphql", {
    headers: {
      authorization:  token ? `Bearer ${token}` : '',
    },
  })

  