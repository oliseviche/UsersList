'use strict'

define(function() {
	return {
		initInfiniteScrolling: ($scope, callback) => {
			let scrollHandler = () => {
				if ((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight) {
					callback();
					$scope.$digest();
    			}
			}
			window.addEventListener('scroll', scrollHandler);
			$scope.$on('$destroy', () => {
				window.removeEventListener('scroll', scrollHandler);
			});
		}
	}
})