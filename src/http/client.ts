import { ApolloClient } from "apollo-client";
import { createHttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import { UserModel } from "@/views/pages/users/types/user";

const url = "https://dev-ubiasoko-api.codeblock.co.tz/graphql";
const token = UserModel.getToken();
console.log(token);
// HTTP connection to the API
const httpLink = createHttpLink({
  // You should use an absolute URL here
  uri: url,
  headers: {
    authorization: token !== null ? `Bearer ${token}` : "",
  },
});

// Cache implementation
const cache = new InMemoryCache();

// Create the apollo client
export const apolloClient = new ApolloClient({
  link: httpLink,
  cache,
});
