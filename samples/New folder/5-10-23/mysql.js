const mysql = require('mysql2');

const pool = mysql.createPool ({
    host : 'localhost',
    user: 'root',
    password: 'Vuedata@123',
    database: 'VuedataMeetings',
    connectionLimit: 10,
});

pool.query ('select * from MeetingRooms', (err, results) =>{
    if (err) {
        console.error(err);
        return;
    }
    console.log('Query results:', results);
});

