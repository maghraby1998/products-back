import sqlite from "sqlite3";

const database = new sqlite.Database(
  "./database.sqlite",
  sqlite.verbose().OPEN_READWRITE
);

export default database;
