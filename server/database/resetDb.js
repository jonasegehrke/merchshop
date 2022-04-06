import db from './createConnection.js'

await db.users.deleteMany({});

db.client.close();