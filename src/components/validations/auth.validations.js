import Joi from "joi";

function registerValidation(data) {
  const schema = Joi.object({
    user_first_name: Joi.string().min(3).max(30).required(),
    user_last_name: Joi.string().min(3).max(30),
    user_phone: Joi.string()
      .pattern(new RegExp("^998[389][012345789][0-9]{7}$"))
      .required(),
    user_password: Joi.string().min(6).required(),
  });
  try {
    if (schema.validate(data).error) {
      return {
        status: false,
        message: schema.validate(data).error.details[0].message,
      };
    }
    return {
      status: true,
    };
  } catch (err) {
    return err;
  }
}

function loginValidation(data) {
  const schema = Joi.object({
    user_phone: Joi.string()
      .pattern(new RegExp("^998[389][012345789][0-9]{7}$"))
      .required(),
    user_password: Joi.string().min(6).required(),
    user_telegram_id: Joi.string().min(7),
  });
  try {
    if (schema.validate(data).error) {
      return {
        status: false,
        message: schema.validate(data).error.details[0].message,
      };
    }
    return {
      status: true,
    };
  } catch (err) {
    return err;
  }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  registerValidation,
  loginValidation,
};
