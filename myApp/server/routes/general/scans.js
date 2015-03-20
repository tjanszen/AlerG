var Factual = require('factual-api');
var factual = new Factual(process.env.FACTUAL_KEY, process.env.FACTUAL_SECRET);

module.exports = {
  cors:{origin: ['http://192.168.1.15:8100'],credentials: true},
  handler: function(request, reply) {
    console.log('REQUEST.PARAMS', request.params);
    factual.get('/t/products-cpg?q=' + request.params.upc, function (error, res) {
      var productInfo = res.data;
      console.log('RESPONSE FROM FACTUAL!!!!!!!', res.data);
      console.log('ERROR FROM FACTUAL???????', error)
      reply(productInfo);
      });
    }
};
