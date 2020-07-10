import User from './db-connection';

/**
 * Resolver map to be used with graphql-tools makeExecutableSchema.
 * Set up for persistent usage with databases
 */
const resolvers = {

  // construct all queries here
  Query: {
    getUser: (root, { id }) => {
      // return new User(id, userDatabase[id]);
    },
    getUsers: async (root) => {
      // return new User(id, userDatabase[id]);
      var usrs = await User.find();
      return usrs;
    },
  },

  Mutation: {
    // create a new user
    createUser: async (root, { input }) => {
      const newUser = new User({
        firstName: input.firstName,
        lastName: input.lastName,
        gender: input.gender,
        createdAt: input.createdAt,
        email: input.email,
        contacts: input.contacts,
      });
      newUser.id = newUser._id;

      // construct Promise to return and save newUser
      const message = await new Promise((resolve, reject) => {
        newUser.save((err, usr) => {
          if (err) {
            reject(err);
          }
          else {
            resolve(newUser);
          }
        });
      });
      return message;
    }
  }
}


export { resolvers };