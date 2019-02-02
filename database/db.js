

var mysql = require('mysql');

var db = mysql.createConnection({
    user: 'root',
    password: 'student',
    host: 'localhost',
    database: 'movies'
})

db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('Connected!');
});


const getMovie = (callback)=>{
    db.query('SELECT * FROM moviedata', (err,results,fields) =>{
        if (err){
            callback(err);
        }
        callback(null, results)
    });
}

const postMovie = (callback)=>{
    db.query('INSERT (title) SET (?)', (err,results,fields) =>{
        if (err){
            callback(err)
            return;
        }
        callback(null, results)
    });
}

module.exports = {getMovie, postMovie}