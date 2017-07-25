var app = angular.module('firebook',['ngRoute','firebase']);

//Angular Routing
app.config(function($routeProvider){

	$routeProvider.when('/',{
		templateUrl : 'views/Login.html',
		controller: 'register'
	})
	.when('/dashboard', {
    	
    	resolve : {

    		'check' : function($rootScope ,$location){
    			if (!$rootScope.loggedIn) {
    				$location.path("/");
    			}
    		}

    	},

        templateUrl : "dashboard.html"

     });

     

});


