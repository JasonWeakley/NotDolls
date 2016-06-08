"use strict";

let NotDolls = angular.module("NotDolls", ["ngRoute"]);

app.config(["$routeProvider", 
	fuction ($routeProvider) {
	$routeProvider
		.when("/", {
			templateUrl: "partials/main.html",
      controller: "MainCtrl",
		})
		.otherwise("/")
	}
]);