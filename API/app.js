const express = require("express");
const app = express();
const helmet = require("helmet");
const cookieParser = require("cookie-parser");
const cors = require("cors");

app.use((req,res,next) => {
    res.setHeader("Access-Control-Allow-Origin", `http://localhost:8080`);
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, PUT, DELETE"
    );
    res.setHeader("Access-Control-Allow-Credentials", "true");
    next();
});

var corsOption = {
    origin:"http://localhost:8080"
};

app.use(cors(corsOption));

var roleRoutes = require("./routes/role.routes.js");
var companyRoutes = require("./routes/company.routes.js");

app.use(helmet());
app.use(express.json());
//app.use(cookieParser());

app.use("/api/roles", roleRoutes);
app.use("/api/companies", companyRoutes);

module.exports = app;