const {MongoClient} = require('mongodb');
const url ="mongodb://localhost:27017";
const dbname = 'Sample';

async function ConnectAndQuery() {
    const client = new MongoClient (url, {
        useNewUrlParser:true,
        useUnifiedTopology:true,
    });

    try {
        await client.connect();
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