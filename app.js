import express from "express";
import database from "./database.js";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.post("/", (req, res) => {
  const sql = "INSERT INTO users (name) VALUES (?);";
  const params = [req.body?.name];

  database.run(sql, params, (err, result) => {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.json({
      message: "success",
    });
  });
});

app.delete("/delete/:userId", (req, res) => {
  const sql = "DELETE FROM users WHERE id = ?;";
  const params = [req.params?.userId];

  database.run(sql, params, (err, result) => {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.json({
      message: "success",
    });
  });
});

app.get("/", (req, res) => {
  const sql = "SELECT * FROM users;";

  database.all(sql, [], (err, rows) => {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.json({
      message: "success",
      data: rows,
    });
  });
});

app.listen(5000, () => {
  console.log("server is running on port 5000");
});
