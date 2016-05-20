app.controller("MainController", function($scope) {
	$scope.zitate = [
		"Zitat eins ist das erste und so weiter und so fort",
		"Zitat zwei ist das zweite und so weiter und so fort",
		"Zitat drei ist das dritte und so weiter und so fort",
		"Zitat vier ist das viert und so weiter und so fort"
	];
	$scope.zitat = "Drück mich";
	$scope.kopieren = "kopieren";

	$scope.zitatWechseln = function() {
		var laenge = $scope.zitate.length;
		var index = Math.floor(Math.random() * laenge);
		$scope.zitat = $scope.zitate[index];
		console.log($scope.zitat);
		console.log("wechselncontroller");
	};



});