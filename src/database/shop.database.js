const {Pool} = require("pg");

const pool = new Pool({
    host:"3.16.149.241",
    user:"clotheShop",
    password:"clothes279527",
    database:"clothesShop",
    port:5432
});


module.exports = pool;
