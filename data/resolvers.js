import { connection } from '../db/db'
import Vehicle from '../classes/Vehicle';

/**
 * Resolver map to be used with graphql-tools makeExecutableSchema.
 * Set up for persistent usage with databases
 */
const resolvers = {
  Query: {
    getVehicleById: async (root, input) => {
      let sql = `SELECT * FROM Vehicles WHERE id="${input.id}";`;
      const message = await new Promise((resolve, reject) => {
        connection.query(sql, (err, res) => {
          if (err) {
            reject(err);
          }
          resolve(res);
        });
      });
      return message;
    },
    getVehiclesByYear: async (root, input) => {
      console.log(input);
      let sql = `SELECT * FROM Vehicles WHERE year=${input.year};`;
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
  },
  Mutation: {
    createVehicle: async (root, { input }) => {
      let id = require('crypto').randomBytes(10).toString('hex');
      let sql = `INSERT INTO Vehicles Values("${id}", "${input.make}", "${input.model}", ${input.year});`;
      const message = await new Promise((resolve, reject) => {
        connection.query(sql, (err, res) => {
          if (err) {
            reject(err);
          }
          resolve(new Vehicle(id, input));
        });
      });
      return message;
    }
  }
}

export { resolvers };