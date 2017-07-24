var app = angular.module('firebook',['ngRoute','firebase']);

//Angular Routing
app.config(function($routeProvider,$locationProvider){

	$routeProvider.when('/',{
		templateUrl : 'views/Login.html',
		controller: 'register'
	});


	  // enable html5Mode for pushstate ('#'-less URLs)

    

});



app.controller('register',function($scope,$location,$firebaseAuth){

	var ref = firebase.auth();  
    var authObj = $firebaseAuth(ref);

    console.log(authObj);

	$scope.reg = function(){
		if($scope.name!=null && $scope.email!=null && $scope.password!=null && $scope.password_again!=null){

			if($scope.password == $scope.password_again){
					
				//create users
				authObj.$createUserWithEmailAndPassword($scope.email, $scope.password).then(function(){

					alert('Thank You for Registeration');

					authObj.$onAuthStateChanged(function(user) {
					  user.sendEmailVerification(); 

					  if (user.emailVerified) {
					    alert('Now log In with your Credentials');
					  }
					  else {
					    alert('Please Verifiy your Email');
					  }

					});

				}).catch(function(error) {
				  // Handle Errors here.
				  
				  alert(error.message);
				  // ...
				});


			}else{
				alert('Password not Matched!!');
			}

		}else{
			alert('Please Fill up all feilds');
		}
		
	};

	$scope.signin = function(){
		
		
	};

});

