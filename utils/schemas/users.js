const joi = require('joi')

const userIdSchema = joi.string().regex(/^[0-9a-fA-F]{24}$/)
const userNameSchema = joi.string().max(30)
const userLastNameSchema = joi.string().max(30)
const userEmailSchema = joi.string().email({ minDomainSegments: 2 })
const userPasswordSchema = joi
  .string()
  .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'))

const createUserSchema = {
  name: userNameSchema.required(),
  lastName: userLastNameSchema,
  email: userEmailSchema.required(),
  password: userPasswordSchema.required(),
}

const updateUserSchema = {
  name: userNameSchema,
  lastName: userLastNameSchema,
  email: userEmailSchema,
  password: userPasswordSchema,
}

module.exports = {
  userIdSchema,
  createUserSchema,
  updateUserSchema,
}
