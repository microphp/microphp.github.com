MicroPHPApp = angular.module('MicroPHPApp', [], function($routeProvider, $locationProvider) {

	$locationProvider.html5Mode(false);
	$locationProvider.hashPrefix('!');

	$routeProvider.when('/', {
			controller: HomeController,
			templateUrl: 'partials/home.html'
		})
		.when('/code', {
			controller: CodeController,
			templateUrl: 'partials/code.html',
			title: ': Code'
		})
		.when('/code.html', {
			redirectTo: '/code'
		})
		.otherwise({redirectTo: '/'});

});

/**
 * primarily this loads the gimmebar assets on startup
 * @param {[type]} $http  [description]
 * @param {[type]} $scope [description]
 * @param {[type]} $q     [description]
 */
function MainController($http, $scope, $q) {
	// init scope model
	$scope.model = { 'records': [] };

	var http_calls = [];
	var limit = 50;
	var skip = 0;
	var url = "https://gimmebar.com/api/v0/public/assets/funkatron/micro-php.json";


	var get_gb_assets = function($http, url, limit, skip) {
		return $http.jsonp(url, {
			'params':{
				'limit':limit,
				'skip':skip,
				'jsonp_callback':'JSON_CALLBACK'
			}
		})
		.success(function(data, status) {
			console.log('success');
			if (data.records) {
				$scope.model['records'] = $scope.model['records'].concat(data.records);
			}
			if (data.more_records) {
				skip += limit;
				http_calls.push(get_gb_assets($http, url, limit, skip));
			}
		});
	};

	console.log('kicking off get_gb_assets');

	get_gb_assets($http, url, limit, skip);

}

/**
 * This controller doesn't do anything, but good to have it broken out
 * @param {object} $scope shared scope
 */
function HomeController($scope) {}

/**
 * This controller doesn't do anything, but good to have it broken out
 * @param {object} $scope shared scope
 */
function CodeController($scope) {}

/**
 * this actually kicks off the app and binds title changes when the route
 * changes
 */
MicroPHPApp.run(['$location', '$rootScope', function($location, $rootScope) {
	$rootScope.$on('$routeChangeSuccess', function (event, current, previous) {
		if (current.$route) { // this won't be set on a redirect
			$rootScope.title = current.$route.title;
		}
	});
}]);