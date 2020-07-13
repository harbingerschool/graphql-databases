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

  type Vehicle{
    id: ID
    make: String
    model: String
    year: Int
  }

  input VehicleInput{
    id: ID
    make: String
    model: String
    year: Int
  }

  type Query {
    getVehiclesByYear(year: Int!): [Vehicle]
    getVehicleById(id: Int!): [Vehicle]
  }

  type Mutation {
    createVehicle(input: VehicleInput): Vehicle
  }
`;

const schema = makeExecutableSchema({ typeDefs, resolvers });

export default { schema };