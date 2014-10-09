app = angular.module("MyApp", ["ngRoute"]);
app.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
                when('/Home', {
                    templateUrl: 'view/home.html',
                    controller: 'HomeCtrl'
                }).
                when('/Mission', {
                    templateUrl: 'view/mission.html',
                    controller: 'HomeCtrl'
                }).
                when('/Tours', {
                    templateUrl: 'view/tour.html',
                    controller: 'TourCtrl'
                }).
                when('/STORIES/:ID', {
                    templateUrl: 'view/stories.html',
                    controller: 'StoriesCtrl'
                }).
                otherwise({
                    redirectTo: '/Home'
                });
               
    }]);
app.controller("StoriesCtrl", function($http, $scope, $routeParams) {
    AA();
    $scope.data = $routeParams.ID;
    $scope.ArrayString = ["ss", "aa", "qq", "ww"];
    $scope.MyFFunc = function(dat) {
        $(".AAFunc[myid='" + aa + "']").css("font-size", "50px");

    };
    $scope.GG = function(id) {
        if (id === 1) {
            $(".BodyMM").css({
                "background-color": "red",
                height: "40%"
            });
            aa = $(".BodyMM").css("background-color");
            console.log(aa);
        } else {
            $(".BodyMM").css({
                "background-color": "blue",
                height: "70%"
            });
        }
    };
});
app.controller("HomeCtrl", function($http, $scope) {
//  $http.post("fb.com",{task:1}).success(function(data){
//      console.log(data);
//  });

    $scope.data = "hha";

});
app.controller("TourCtrl", function($scope, $routeParams) {
    $scope.data = $routeParams.ID;
});
app.controller("HeaderCtrl", function($http, $scope) {
    $scope.HeaderInfo = [
        {
            name: "misions",
            id: 1
        },
        {
            name: "tours",
            id: 2
        },
        {
            name: "stories",
            id: 3
        },
        {
            name: "contact",
            id: 4
        }
    ];
});


function AA() {
    $("body").on("mouseenter", ".AAFunc", function() {
        $(this).css({
            "color": "black",
            "font-size": "16px"
        });
    });
    $("body").on("click", ".AAFunc", function() {
        console.log($(this).attr("myid"));
    });
}