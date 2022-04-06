import db from './createConnection.js'

const users = await db.users.find().toArray();

console.log(users);

db.client.close();