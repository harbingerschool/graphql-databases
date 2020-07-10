/** 
 * This file contains a schema construction using GraphQl's schema language.
*/
import { resolvers } from './resolvers';
import { makeExecutableSchema } from 'graphql-tools';

const typeDefs = `
  enum Gender {
    MALE
    FEMALE 
    OTHER
  }

  input UserInput {
    id: ID
    firstName: String!
    lastName: String!
    gender: Gender
    createdAt: String!
    email: String!
    contacts: [ContactInput]
  }

  type Contact {
    firstName: String
    lastName: String
  }

  input ContactInput {
    firstName: String
    lastName: String
  }

  type User {
    id: ID
    firstName: String
    lastName: String
    gender: Gender
    createdAt: String
    email: String
    contacts: [Contact]
  }  

  type Query {
    getUser(id: ID!): User
    getUsers: [User]
  }

  type Mutation {
    createUser(input: UserInput): User
  }
`;

const schema = makeExecutableSchema({ typeDefs, resolvers });

export { schema };