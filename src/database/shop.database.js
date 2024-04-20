const {Pool} = require("pg");

const pool = new Pool({
    host:"db",
    user:"clotheShop",
    password:"clothes279527",
    database:"clothesShop",
    port:5432
});


module.exports = pool;
