import * as joi from 'joi';

export default {
  post:{
    body: joi.object({
      userName: joi.string().email(),
      name: joi.string().min(1).max(100).required(),
      firstName: joi.string().min(1).max(100).required(),
      password: joi.string().min(6).max(100).required(),
      confirmPassword: joi.string().required().valid(joi.ref('password')).options({
        language: {
          any: {
            allowOnly: 'Passwords and confirm password are not identical',
          },
        },
      }),
      admin: joi.boolean(),
      addressName: joi.string(),
      street: joi.string().required(),
      house: joi.string().min(1).max(5).required(),
      bus: joi.string(),
      postal: joi.string().min(1).max(10).required(),
      city: joi.string().min(1).max(100).required(),
      country: joi.string().min(1).max(100).required(),
    }),
  },
  
};
