import db from './createConnection.js'

await db.users.insertOne({
    username: 'jonasegehrke',
    password: '$2b$12$55YDSc/ZpkGJGy2BcUJXdufWm5eqAStKouzAORwFOmK4hBq3yvtIi'
});

await db.users.find().toArray((err, mothers) => {
    if (err) {
        console.log(err);
        return;
    }

    console.log(mothers);
});