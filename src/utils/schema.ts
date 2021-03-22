import 'text-encoding-polyfill';
import Joi from '@hapi/joi';

export const loginSchema = Joi.object({
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .error(new Error('Email must be a valid email')),
  password: Joi.string().error(new Error('Password required')),
});
