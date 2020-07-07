import express from 'express';
import { graphqlHTTP } from 'express-graphql';

import schema from './schema';

const PORT = 3000;
const app = express();

const root = {
  user: () => {
    return {
      'id': 8243932,
      'firstName': 'Jimmy',
      'lastName': 'Borzillieri',
      'createdAt': '3/20/1988',
      'emails': [
        { email: 'jb@email.com' },
        { email: 'jb123@email.com' }
      ],
    }
  }
}

app.get('/', (req, res) => {
  res.send('GraphQl is cool');
})

app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));

app.listen(PORT, () => {
  console.log(`server running on port port localhost:${PORT}/graphql`);
});