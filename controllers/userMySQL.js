import { Query, QueryWithParameter } from "../Database/MySQL/User/query.js";
import {
    SQL_InsertInto,
    SQL_QueryUser,
    SQL_QueryUserId,
} from "../Database/MySQL/constants.js";

export const getUsers = async (req, res) => {
    const result = await Query(SQL_QueryUser);
    res.send(result);
};

export const getUserDetail = async (req, res) => {
    const { id } = req.params;
    const user = await QueryWithParameter(SQL_QueryUserId, [id]);
    if (user.length === 0) {
        res.status(404);
        res.send({
            message: "Not found",
        });
    } else {
        res.send(user);
    }
};

export const InsertIntoUser = async (req, res) => {
    const user = req.body;
    const result = await QueryWithParameter(SQL_InsertInto, [
        user.username,
        user.password,
        user.firstName,
        user.lastName,
        user.email,
        user.sex,
        user.address,
    ]);
    console.log(result);
    res.send(result);
};
