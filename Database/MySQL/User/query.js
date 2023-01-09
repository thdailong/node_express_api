import { SQL_QueryUser } from "../constants.js";
import { con } from "../db_connect.js";

export function Query(queryCommand) {
    return new Promise((resolve, reject) => {
        con.query(queryCommand, function(err, result, fields) {
            if (err) {
                return reject(err);
            }
            return resolve(result);
        });
    })
}

export function QueryWithParameter(queryCommand, parameter) {
    return new Promise((resolve, reject) => {
        con.query(queryCommand, parameter,function(err, result, fields) {
            if (err) {
                return reject(err);
            }
            return resolve(result);
        });
    })
}
