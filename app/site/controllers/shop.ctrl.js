(function(){
	angular
		.module('shopApp')
		.controller('ShopCtrl',ShopCtrl)

	function ShopCtrl($scope,productSrv, $state){
		var shopVm = this;

		//TODO #3 Capture resolved products for view
		shopVm.products = productSrv.products;
		console.log(shopVm.products)



		// watch for any changes to model data
		// $scope.$watch(function(){
	 //    	return productSrv.products;
		// }, function (newValue) {
		//     shopVm.products = productSrv.products;
		// });

		shopVm.login = function () {
			$state.go('auth');
		}

		shopVm.cart = function () {
			$state.go('cart');
		}

		shopVm.addToCart = function (item) {
			productSrv.cartItems.push(item)
			console.log(productSrv.cartItems)
		}
	}

})();


