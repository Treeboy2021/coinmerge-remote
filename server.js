var express = require('express');
var cors = require('cors');
var axios = require('axios');

// Create global app object
var app = express();
app.use(cors());

app.get('/', function(req, res) {
	res.send('??CoinMerage Remote API??');
});
// base url: https://api.coingecko.com/api/v3/coins
app.get('/contract_market_chart/:id/:address', async function(req,res){
	
	var result = await axios.get(`https://api.coingecko.com/api/v3/coins/${req.params.id}/contract/${req.params.address}/market_chart/?vs_currency=usd&days=1`);
	res.json(result.data);
});

app.get('/token/:address', async function(req, res) {
	try{
		var result = await axios.post(`https://api.dex.guru/v2/tokens/`, {ids: [req.params.address]});
		res.json(result.data[0]);
	} catch(e) {
		console.log(e);
	}
});

app.get('/contract_info/:id/:address', async function(req, res) {
	var result = await axios.get(`https://api.coingecko.com/api/v3/coins/${req.params.id}/contract/${req.params.address}`);
	res.json(result.data);
});

app.get('/token/transactions/:address/:network', async function(req, res) {
	var result = await axios.get(`https://api.dex.guru/v2/tokens/${req.params.address}-${req.params.network}/swaps`);
	res.json(result.data);
})


// finally, let's start our server...
var server = app.listen( process.env.PORT || 5641, function(){
  console.log('Listening on port ' + server.address().port);
});