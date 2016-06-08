NotDolls.controller("MainController", [
	"http",
	"$scope",

	function ($http, $scope) {
		$http.get("http://localhost:5000/api/Inventory")
	}

]);