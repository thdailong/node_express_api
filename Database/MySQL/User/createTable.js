import { con } from "../db_connect.js";
import { SQL_CreateTable } from "../constants.js";

con.query(SQL_CreateTable, function (err, result) {
    if (err) throw err;
    console.log("Table created!");
});
