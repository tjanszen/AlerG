module.exports = [
  {method: 'get', path: '/scans/{upc}', config: require('../routes/general/scans')},

  {method: 'post', path: '/auth/login', config: require('../routes/users/login')},
];
