/** 
 * This file contains a schema construction using GraphQl's buildSchema object.
 * This file is not used by default, but serves as a comparison file for the differences between
 * our intro to GraphQL, and how we will use it in this lesson with our persistent databases :)
*/
import { buildSchema } from 'graphql';

const schema = buildSchema(`
  
  enum Gender {
    MALE
    FEMALE 
    OTHER
  }

  type Contact {
    firstName: String
    lastName: String
  }

  input ContactInput {
    firstName: String
    lastName: String
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
  }

  type Mutation {
    createUser(input: UserInput): User
  }

`);

export default schema;