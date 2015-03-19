module.exports = {
  cors:{origin: ['http://localhost:8100'],credentials: true},
  handler: function(request, reply) {
    console.log('REQUEST.PARAMS', request.params);
    console.log('MADE IT TO THE MOTHER FUCKING SERVER');
    reply();
  }
};
