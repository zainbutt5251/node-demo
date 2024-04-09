const enums = require("../_enums");
const { ResponseStatus, ResponseMessages } = require("../_enums");

const ApiErrorHandler = (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch((err) => {
      return res.status(enums.ResponseStatus.INTERNAL_ERROR).send({
        success: false,
        message: enums.ResponseMessages.INTERNAL_ERROR + " " + err.message,
        error: err.response?.data || err,
      });
    });
  };
};

const EmailHandler = (fn) => {
  return (data) => {
    return fn({ ...data })
      .then((res) => {
        return res;
      })
      .catch((err) => {
        return {
          success: false,
          message: "Error sending email",
          error: err.message,
        };
      });
  };
};

/**
 *
 * @param {Object} schema - The valid data schema
 * @param {Object} data - The data object that needs to be verify
 * @param {Object} res - The controller response param
 *
 */
const ValidationrHandler = (schema, data, res) => {
  const { error, value } = schema.validate(data);

  if (!error)
    return {
      value,
    };

  return {
    invalid: () => {
      return res.status(ResponseStatus.BAD_REQUEST).send({
        success: false,
        message: ResponseMessages.VALIDATION_ERROR,
        error: error.message,
      });
    },
  };
};

/**
 *
 * @param {Function} fn - The service function
 * @param {Object} data - The data object that needs to be pass in the service function
 * @param {Object} res - The controller response param
 *
 */
const ServiceHandler = async (fn, data, res) => {
  const result = await fn(data);

  if (!result?.success)
    return res.status(enums.ResponseStatus.BAD_REQUEST).send(result);

  if (result?.success) {
    const { execution, ...detail } = result;
    res.status(enums.ResponseStatus.SUCCESS).send(detail);
    execution && execution();
    return;
  }
};

module.exports = {
  ApiErrorHandler,
  EmailHandler,
  ValidationrHandler,
  ServiceHandler,
};