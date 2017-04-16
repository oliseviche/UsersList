'use strict'

define(function() {
	function HomeController($scope, $routeParams) {
		this.scope = $scope;
		this.scope.buttonCaption = 'Push me!';
		this.scope.rtl = false;

		this.scope.dirChange = () => {
			if(this.scope.rtl) {
				document.documentElement.setAttribute("dir", "rtl");
			} else {
				document.documentElement.setAttribute("dir", "ltr");
			}
		};

		this.scope.$on('$destroy', () => {
			document.documentElement.setAttribute("dir", "ltr");
		});
	}
	HomeController.$inject = ['$scope']

	return HomeController;
});