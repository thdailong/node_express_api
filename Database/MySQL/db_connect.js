import mysql from "mysql";

export const conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "TaoMySQL123"
});

export const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "TaoMySQL123",
    database: "mydb",
})

conn.connect(function(err) {
    if (err) throw err;
    console.log("Connected!!!");
})