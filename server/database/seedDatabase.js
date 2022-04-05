import db from './createConnection.js'

await db.users.deleteMany({seeded: true});

await db.users.insertOne({
    username: 'jonasegehrke',
    password: '$2b$12$55YDSc/ZpkGJGy2BcUJXdufWm5eqAStKouzAORwFOmK4hBq3yvtIi',
    seeded: true
});

const users = await db.users.find().toArray();

console.log(users);


db.client.close();