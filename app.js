//browser-sync start --server --directory --files "**/*"
(function (){
	'use strict';

angular.module('LunchCheck',[])

.controller('LunchCheckController',LunchCheckController);
	function LunchCheckController($scope){
		$scope.food="";
		$scope.message="";
		$scope.col="";
		var i=0;
		$scope.count=function(){
			var arr=$scope.food.split(',');
			var len=arr.length;
			console.log(len);
			if(arr=="" || arr==" "){
				$scope.message="Please enter Data First"
				document.getElementById("d1").style.color="red";
				document.getElementById("t1").style.borderColor="red";
				//$scope.col="red";
			}else if(len<=3){
				$scope.message="Enjoy!";
				document.getElementById("d1").style.color="green";
				document.getElementById("t1").style.borderColor="green";
				//$scope.col="green";
			}else {
				$scope.message="Too much!";
				document.getElementById("d1").style.color="green";
				document.getElementById("t1").style.borderColor="green";
				//$scope.col="green";
			}
		};
	}

})();