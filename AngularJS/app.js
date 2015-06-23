(function(){
	var app=angular.module('store', []);

	app.controller('StoreController', function(){
		this.products = gems;
	});
	var gems = [{
		name: 'Emerald',
		price: 2.95,
		description: "It's the green GEM",
		canPurchase: true,
		soldOut: false,
	},
	{
		name: 'Ruby',
		price: 3.00,
		description: "It's the red GEM",
		canPurchase: true,
		soldOut: false,
	},
	{
		name: 'Saphire',
		price: 3.05,
		description: "It's the blue GEM",
		canPurchase: true,
		soldOut: false,
	},
	{
		name: 'Topaz',
		price: 3.10,
		description: "It's the yellow GEM",
		canPurchase: true,
		soldOut: true,
	}];
})();