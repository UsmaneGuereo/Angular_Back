const Joi = require('joi');
const BaseModel = require('../utils/base-model.js');

module.exports = new BaseModel('Ticket', {
  id: Joi.number().required(),
  title: Joi.string().required(),
  date: Joi.date().required(),
});
