import express from "express";
import bodyParser from "body-parser";

import studentsRoutes from "./routes/students.js";

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

app.use("/students", studentsRoutes);
app.get("/", (req, res) => res.send("Server is connect"));
app.all("*", (req, res) =>res.send("Link does not exist"));

app.listen(PORT, () =>console.log(`http://localhost:${PORT}`));
