const { createSourceEventStream } = require("graphql");

export default class User {
  constructor(id, { firstName, lastName, gender, createdAt, email, contacts }) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.gender = gender;
    this.createdAt = createdAt;
    this.email = email;
    this.contacts = contacts;
  }
}