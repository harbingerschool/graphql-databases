import express from 'express';
import { graphqlHTTP } from 'express-graphql';

// root imports
import { schema } from './data/schema-schema-lang'; // for use with persistent DBs

// app variables
const PORT = 3000;
const app = express();

app.get('/', (req, res) => {
  res.send('GraphQl is cool');
});

/**
 * GraphQL setup for persistence, using schema language and makeExecutableSchema object 
 * from graphql-tools.
 */
app.use('/graphql', graphqlHTTP({
  schema: schema, // schema now contains the typedefs and resolvers './schema-schema=-lang.js :)
  graphiql: true,
}));

app.listen(PORT, () => {
  console.log(`server running on port port localhost:${PORT}/graphql`);
});