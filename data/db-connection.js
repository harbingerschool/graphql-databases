import mongoose from 'mongoose';
import {constants} from '../constants/db';

// Mongo connection
const mongoURI = constants.dbURI;
mongoose.Promise = global.Promise; // use promise to connect to MongoDB


mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// check db connection
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log("connected to db");
});

const userSchema = new mongoose.Schema({
  firstName: {
    type: String
  },
  lastName: {
    type: String
  },
  gender: {
    type: String
  },
  createdAt: {
    type: String
  },
  email: {
    type: String
  },
  contacts: {
    type: Array
  }
});

// create mongoose model
// const User = mongoose.model('user', userSchema);
// export default User;
module.exports = mongoose.model('User', userSchema);