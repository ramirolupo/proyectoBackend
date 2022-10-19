import knex from "knex";
import connection from "./db.js";   
const db = knex(connection)
console.log(db);