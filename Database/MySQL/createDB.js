import { conn } from "./db_connect";

conn.query("CREATE DATABASE mydb", function (err, result) {
    if (err) throw err;
    console.log("Database created!")
})