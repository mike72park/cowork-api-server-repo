const mysql = require("mysql2");

const connection = mysql.createConnection({
    host: "115.68.7.13",
    user: "root",
    password : "root0331",
    database: "test",
})









/*
connection.query(
    "select * from `account` limit 3",
    function(err, results, fields) {
        console.log(results.length);
        for (var j=0; j< results.length; j++) {
            const keys = Object.keys(results[j]);
            for (var i=0; i< keys.length; i++) {
                const key = keys[i];
                console.log(`key: ${key}, value: ${results[j][key]}`)
            }
        }
    }
)
*/