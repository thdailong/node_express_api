import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

import usersRoutes from "./routes/users.js";
import UserMySQLRoutes from "./routes/usersMySQL.js";

const app = express();
const PORT = 4000;

app.use(cors({
    origin: 'http://localhost:3000'
}));

app.use(bodyParser.json());

app.use("/users", usersRoutes);
app.use("/MySQL_User", UserMySQLRoutes);

app.get("/", (req, res) => {
    console.log("[Test]");
    res.send("Hellooo");
});

app.listen(PORT, () =>
    console.log(`Server running on port: http://localhost:${PORT}`)
);
