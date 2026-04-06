const {Sequelize} = require("sequelize");

// // Option 3: Passing parameters separately (other dialects)
const sequelize = new Sequelize("nodedb", "root", "Admin@123", {
  dialect: "mysql",
  host: "localhost",
});
module.exports = sequelize;