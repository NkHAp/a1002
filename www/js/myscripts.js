document.addEventListener('deviceready', function () {
		window.analytics.startTrackerWithId('UA-68554177-2');
		window.analytics.trackView('Home Screen');
		window.analytics.trackEvent('Home', 'DeviceReady', 'Hits', 1); 	
}, false);

function loaderShow() {
    jQuery("#preloader,#status").show();

}

function loaderHide() {
    jQuery("#preloader,#status").hide();
}

function openLink(url) {
    window.open(url, '_system');
}
function exitApp() {
    navigator.app.exitApp(); 
}
$(document).ready(function () {
	//alert(domain);
    var elem = angular.element(document.querySelector('[ng-app]'));
    var injector = elem.injector();
    var $rootScope = injector.get('$rootScope');
	$rootScope.share = function (e, p) {
		//alert('h1');
		//window.plugins.socialsharing.share('Message only');
		//p.Item.title
		//
		//alert(domain);
        window.plugins.socialsharing.share(p.Item.text, p.Item.title, domain+p.Item.image, domain+'index/contents/news/'+p.Item.id);
    };
    if (window.localStorage.getItem('id') != null) {

        $rootScope.$apply(function () {
            $rootScope.loggedIn = 1;
        });
    } else {
        $rootScope.$apply(function () {
            $rootScope.loggedIn = 0;
        });
    }


    $('body').on('click', '.remove-rag', function (event) {
        event.preventDefault();
        jQuery(this).parent().remove();
    });

});