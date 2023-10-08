const {MongoClient} = require('mongodb');
const url ="mongodb://127.0.0.1:27017";
const dbname = 'Sample';

async function ConnectAndQuery() {
    const client = new MongoClient (url);

    try {
        console.log('Connected to MongoDb');
        
        const db = client.db(dbname);
        const collection = db.collection('Products');
        const docs = await collection.find({}).toArray();
        console.log('Documents:', docs);
    } catch (error ){
    console.error('Error', error);
    } finally {
        await client.close();
        console.log('Disconnected From MongoDB')
    }
}

ConnectAndQuery();