const { ENV, ResponseStatus } = require("../_enum/enum");
const path = require("path");

const env = {
  port: 8082,
  corsOption: "",
  clientside: "http://localhost:3000",
  mongodb_uri:"mongodb+srv://doadmin:9u3ecv8Q27U5xJ64@MaybeChat-DB-7bfeeb04.mongo.ondigitalocean.com/admin?tls=true&authSource=admin",
};

if (process.env.NODE_ENV === ENV.STAGING) {
  const corsOption = {
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    optionsSuccessStatus: ResponseStatus.SUCCESS,
  };
  env.corsOption = corsOption;
   
}


module.exports = env;