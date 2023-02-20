module.exports = app => {

    //Index routes
    const indexRoutes = require("./index.routes");
    app.use("/", indexRoutes);

    //Auth routes

    const authRoutes = require("./auth.routes");
    app.use("/", authRoutes);

    //User routes
    const userRoutes = require("./user.routes");
    app.use("/user", userRoutes);
}


