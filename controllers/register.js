


angular.module('firebook').controller('register',function($scope,$location,$firebaseAuth,$route,$location){

	var ref = firebase.auth();  
    var authObj = $firebaseAuth(ref);

    console.log(authObj);


//Register Process
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
					    $route.reload();
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
//Ends Here


//sign in

	$scope.signin = function(){
		
		if($scope.loginemail!=null && $scope.loginpass!=null){

			authObj.$signInWithEmailAndPassword($scope.loginemail,$scope.loginpass).then(function(){

				alert('Welcome !!');
				$rootScope.loggedIn=true;	
				$location.path('/dashboard');
				


			}).catch(function(error){
				alert(error.message);
			});

		}else{
			alert('Please fill up all feilds');
		}
	};

});

