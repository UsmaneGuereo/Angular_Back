
const Joi = require('joi');
const BaseModel = require('../utils/base-model');

module.exports = new BaseModel('Student', {
  id: Joi.number().required(),
  prenom: Joi.string().required(),
  nom: Joi.string().required(),
});
