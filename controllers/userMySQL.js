import { Query } from "../Database/MySQL/User/query.js";
import { SQL_QueryUser } from "../Database/MySQL/constants.js";

export const getUsers =  async (req, res) => {
    const result = await Query(SQL_QueryUser);
    res.send(result);
}