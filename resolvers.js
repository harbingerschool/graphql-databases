// import User from './classes/User';
import { connection } from './db/db'

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
    getVehicleById: async (root, { input }) => {
      let sql = `SELECT * FROM Vehicles WHERE id=${input.id}`;
      const message = await new Promise((resolve, reject) => {
        connection.query(sql, (err, res) => {
          if (err) {
            reject(err);
          }
          resolve(res);
        });
      });
    },
    getVehiclesByYear: async (root, { input }) => {
      let sql = `SELECT * FROM Vehicles WHERE year=${input.year}`;
      const message = await new Promise((resolve, reject) => {
        connection.query(sql, (err, res) => {
          if (err) {
            reject(err);
          }
          resolve(res);
        });
      });
    }
  },
  Mutation: {
    // createTable: async (root, { input }) => {
    //   let sql = 'create table users(id int, firstName text, lastName text, gender text, createdAt int, email text, contacts)'
    // },
    createVehicle: async (root, { input }) => {
      let id = require('crypto').randomBytes(10).toString('hex');
      let sql = `insert into Vehicles values(${id}, ${input.make}, ${input.model}, ${input.year}`;
      const message = await new Promise((resolve, reject) => {
        connection.query(sql, (err, res) => {
          if (err) {
            reject(err);
          }
          resolve(res);
        });
      });
      return message;
    }
  }
}


// import User from './db-connection';

// /**
//  * Resolver map to be used with graphql-tools makeExecutableSchema.
//  * Set up for persistent usage with databases
//  */
// const resolvers = {

//   // construct all queries here
//   Query: {
//     getUser: (root, { id }) => {
//       // return new User(id, userDatabase[id]);
//     },
//     getUsers: async (root) => {
//       // return new User(id, userDatabase[id]);
//       var usrs = await User.find();
//       return usrs;
//     },
//   },

//   Mutation: {
//     // create a new user
//     createUser: async (root, { input }) => {
//       const newUser = new User({
//         firstName: input.firstName,
//         lastName: input.lastName,
//         gender: input.gender,
//         createdAt: input.createdAt,
//         email: input.email,
//         contacts: input.contacts,
//       });
//       newUser.id = newUser._id;

//       // construct Promise to return and save newUser
//       const message = await new Promise((resolve, reject) => {
//         newUser.save((err, usr) => {
//           if (err) {
//             reject(err);
//           }
//           else {
//             resolve(newUser);
//           }
//         });
//       });
//       return message;
//     }
//   }
// }


// export { resolvers };


export { resolvers };