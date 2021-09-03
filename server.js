var express = require('express');

// Create global app object
var app = express();

app.get('/', function(req, res) {
	res.send('💖CoinMerage Remote API💖');
});
// base url: https://api.coingecko.com/api/v3/coins
app.get('/contract_market_chart/:id/contract/:address', function(req,res){
	res.redirect(`https://api.coingecko.com/api/v3/coins/${req.params.id}/contract/${req.params.address}/market_chart/?vs_currency=usd&days=1`);
});

app.get('/contract_info/:id/contract/:address', function(req, res) {
	res.redirect(`https://api.coingecko.com/api/v3/coins/${req.params.id}/contract/${req.params.address}`)
});

// finally, let's start our server...
var server = app.listen( process.env.PORT || 5641, function(){
  console.log('Listening on port ' + server.address().port);
});