 
const middleware = "/api/v1/";
 
 
const users = require("./userRoute");
 

const initializeEndpoints = (app) => {
 
  app.use(middleware + "users", users);
  
};

module.exports = initializeEndpoints;