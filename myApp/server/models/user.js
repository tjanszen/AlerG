var bcrypt = require('bcrypt');
var mongoose = require('mongoose');
var Request = require('request');
var qs = require('querystring');
var jwt = require('jwt-simple');
var moment = require('moment');
var User;

var userSchema = mongoose.Schema({
    email: {type: String, unique:true, lowercase: true},
    phone: String,
    password: {type: String, select: false},
    displayName: String,
    photoUrl: String,
    github: String,
    facebook: String,
    linkedin: String,
    createdAt: {type: Date, default: Date.now, required: true}
});
