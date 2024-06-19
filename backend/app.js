const express = require('express');
const { MongoClient } = require('mongodb');
const fs = require('fs');
const path = require('path');

const app = express();
const port = 3000;

const ca = [fs.readFileSync(path.join(__dirname, 'global-bundle.pem'))];

const uri = 'mongodb://pramana:<insertYourPassword>@docdb-2024-06-16-10-26-05.cluster-c9q2ugieae3b.us-east-1.docdb.amazonaws.com:27017/?replicaSet=rs0&readPreference=secondaryPreferred&retryWrites=false';

const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    ssl: true,
    sslValidate: true,
    sslCA: ca
});

client.connect(err => {
    if (err) {
        console.error('Failed to connect to MongoDB', err);
        return;
    }
    console.log('Connected to MongoDB');

    const db = client.db('your-database-name');
    
    // Define your routes here
    app.get('/', (req, res) => {
        res.send('Hello, world!');
    });

    // Close the connection when the app stops
    process.on('SIGINT', () => {
        client.close(() => {
            console.log('MongoDB connection closed');
            process.exit(0);
        });
    });

    app.listen(port, () => {
        console.log(`Server is running on http://localhost:${port}`);
    });
});
