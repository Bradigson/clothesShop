const express = require("express");
const routes = require("./routes/router");

const app = express();

app.use(express.json());

app.set("PORT", process.env.PORT || 2000);

app.use("/api/v1", routes);

const port = app.get("PORT");

app.listen(port, ()=>{
    console.log(`Application available at: http://localhost:${port}/api/v1`)
})