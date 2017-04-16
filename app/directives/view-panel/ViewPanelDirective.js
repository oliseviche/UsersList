'use strict'

define(['./ViewPanelController'], function(controller) {
	return function viewPanel() {
		return {
			restrict: 'E',
			templateUrl: './app/directives/view-panel/view-panel.html',
			controller: controller,
			controllerAs: 'ViewPanelCtrl',
			replace: true,
			link: function($scope, $element) {
				//Да, я в курсе, что так делать как минимум не стоит, т.к. стреляется
				//онскролл часто и грузит процессор. Но это же демка, да и дебаунс
				//писать небыло никакого желaния, как и подключать другие библиотеки.
				//Надеюсь поймёте и простите 😊
				let returnValue = 0;

				let scrollHandler = () => {
					let rect = $element[0].getBoundingClientRect();

					if (rect.top < 0) {
						returnValue = window.pageYOffset;
						$element.addClass('fixed');
					}
					if(window.pageYOffset < returnValue) {
						returnValue = 0;
						$element.removeClass('fixed');
					}
				}
				window.addEventListener('scroll', scrollHandler);
				$scope.$on('$destroy', () => {
					window.removeEventListener('scroll', scrollHandler);
				});
			}
		};
	};
})