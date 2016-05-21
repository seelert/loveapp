app.directive("zitat", function() {
	return {
		templateUrl: "app/templates/zitat.html",
		link: function(scope, element, attrs) {
				$("#zitat").on("click", function() {
					$("#zitat").fadeOut("slow");
					$("#zitat").promise().done(function(){
						scope.zitatWechseln();
						scope.$apply();
						$("#zitat").fadeIn("slow");
					});
					
				});


			}
		};
	});


app.directive("kopieren", function() {
	return {
		templateUrl: "app/templates/kopieren.html",
		link: function(scope) {


		}
	};
});