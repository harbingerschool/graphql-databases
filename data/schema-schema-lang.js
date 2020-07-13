/** 
 * This file contains a schema construction using GraphQl's schema language.
*/
import { resolvers } from '../resolvers';
import { makeExecutableSchema } from 'graphql-tools';

const typeDefs = `
  type Vehicle{
    id: ID
    make: String
    model: String
    year: Int
  }

  input VehicleInput{
    make: String
    model: String
    year: Int
  }

  type Query {
    getVehiclesByYear(year: Int!): [Vehicle]
    getVehicleById(id: String!): [Vehicle]
  }

  type Mutation {
    createVehicle(input: VehicleInput): Vehicle
  }
`;

const schema = makeExecutableSchema({ typeDefs, resolvers });

export { schema };


