import express from "express";
import bodyParser from "body-parser";

import usersRoutes from "./routes/users.js";

const app = express();
const PORT = 4000;

app.use(bodyParser.json());

app.use("/users", usersRoutes);

app.get("/", (req, res) => {
    console.log("[Test]");

    res.send("Hellooo");
});

app.listen(PORT, () =>
    console.log(`Server running on port: http://localhost:${PORT}`)
);
