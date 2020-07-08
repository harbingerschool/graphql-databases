export default class EmailField {
  // takes a single val, or array of emails
  constructor(emails) {
    this.emails = [...emails];
  }
}

// var es = ['1', '2', '3'];
// var ne = new Emails(es);
// console.log(ne.emails);