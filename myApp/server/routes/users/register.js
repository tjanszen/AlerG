'use strict';

var User = require('../../models/user');
var Joi = require('joi');

module.exports = {
  auth: false,
  cors: {origin: ['http://localhost:8100'], credentials: true},
  // validate: {
  //   payload: {
  //     email: Joi.string().email(),
  //     password: Joi.string().required()
  //   }
  // },
  handler: function(request, reply){
    console.log('REGISTER.JS.......REQUEST.PAYLOAD', request.payload);

}
};
