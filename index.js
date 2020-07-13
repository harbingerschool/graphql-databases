import express from 'express';
import { graphqlHTTP } from 'express-graphql';

// root imports
import { schema } from './schema-schema-lang';
import resolvers from './resolvers';

// app variables
const PORT = 3000;
const app = express();
const root = resolvers; // commented out for use with persistence techniques :)

app.get('/', (req, res) => {
  res.send('GraphQl is cool');
})

/**
 * GraphQL setup for usage with buildSchema object :)
 */
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));

app.listen(PORT, () => {
  console.log(`server running on port port localhost:${PORT}/graphql`);
});