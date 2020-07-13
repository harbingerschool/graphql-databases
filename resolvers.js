import User from './classes/User';
import { connection } from './db/db'

const userDatabase = {};

/**
 * resolvers to be used with buildSchema object
 * uncomment to use with buildSchema :)
 */ 
// const resolvers = {
//   getUser: ({ root, id }) => {
//     return new User(id, userDatabase[id]);
//   },
//   createUser: ({ root, input }) => {
//     let id = require('crypto').randomBytes(10).toString('hex');
//     userDatabase[id] = input;
//     return new User(id, input);
//   }
// };

/**
 * Resolver map to be used with graphql-tools makeExecutableSchema.
 * Set up for persistent usage with databases
 */
const resolvers = {
  Query: {
    getUser: ({ root, id }) => {
      return new User(id, userDatabase[id]);
    },
  },
  Mutation: {
    createUser: ({ root, input }) => {
      let id = require('crypto').randomBytes(10).toString('hex');
      userDatabase[id] = input;
      return new User(id, input);
    }
  }
}


export default resolvers;