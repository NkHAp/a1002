app.directive('onFinishRender', function ($timeout) {
    return {
        restrict: 'A',
        link: function (scope, element, attr) {
            if (scope.$last === true) {
                $timeout(function () {
                    scope.$emit('ngRepeatFinished');
                });
            }
        }
    };
});
//$http, $rootScope, $scope, $location, $routeParams, $timeout
app.controller('homeController', function ($http, $rootScope, $scope, $location, $routeParams, $timeout) {
    loaderShow();
	var search = $location.search();
	$scope.domain = domain;
	if(!search.keyword)search.keyword="";
	if(!search.id)search.id="";
	$scope.country_type = search.id;
	//alert($routeParams.id);
	$http.get(domain + "index/contents/adverts").success(function (data, status, headers, config) {	
		$rootScope.adverts = data;
		$rootScope.advertimagepath=domain + "index/app/webroot/"; 
		//$rootScope.advertimagepath=domain + "index/adverts/"; 
		//alert(JSON.stringify(data));
        //$rootScope.countries = data;		
		$rootScope.$digest;
		//loaderHide();
    });

	
	$http.get(domain + "index/contents/countries").success(function (data, status, headers, config) {	
		//alert(JSON.stringify(data));
        $rootScope.countries = data;		
		//$rootScope.$digest;
		//loaderHide();
    });
	$http.get(domain + "index/contents/loadjson?country_type=" + search.id + "&keyword=" + search.keyword ).success(function (data, status, headers, config) {
		$scope.products = data;		
        loaderHide();
    });
	
	
	$rootScope.$on('ngRepeatFinished', function (ngRepeatFinishedEvent) {
        siteMainFn();
    });
	
	$scope.openNewsLink = function (e) {
		openLink(domain+'index/contents/news/'+e);
        jQuery("#" + e).toggle();
    }
	$rootScope.openAdsLink = function (e) {
		openLink('http://'+e);
        //jQuery("#" + e).toggle();
    }
});
app.controller('staticController', function ($http, $rootScope, $scope, $location, $routeParams, $timeout) {

    loaderShow();
	//alert($routeParams.id);
	//jsonview/2
    $http.get(domain + "index/contents/jsonview/" + $routeParams.id).success(function (data, status, headers, config) {
        $scope.staticpage = data;
        //console.log(data.Pageitem.title);
        $scope.$digest;
        loaderHide();
    });

    $scope.$on('$viewContentLoaded', function () {
        siteMainFn();
    });
    $timeout(function () {
        siteMainFn();
    }, 2000);

});


app.controller('commonController', function ($http, $scope, $location, $rootScope, $routeParams, $timeout) {

    $scope.$on('$viewContentLoaded', function () {
        siteMainFn();
    });
    $timeout(function () {
        siteMainFn();
    }, 1000);
});

app.controller('introController', function ($http, $scope, $location, $rootScope, $routeParams) {
    $scope.$on('$viewContentLoaded', function () {
        siteMainFn();
    });
    jQuery('.capture-event').one('click', function myFnnnn() {
        siteMainFn();
        jQuery(".capture-event").off("click", myFnnnn);
    });
}); 