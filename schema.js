import { buildSchema } from 'graphql';


const schema = buildSchema(`
type User {
  id: ID
  firstName: String
  lastName: String
  createdAt: String
  emails: [Email]
}  

type Email{
  email: String
}

type Query {
    user: User
  }
`)

export default schema;