/**
 * Created by Alex.W on 2016/7/27.
 */
//chapter 11


//var app = angular.module('myApp',[]);
//
//app.controller('myC',function($scope) {
//    $scope.names= ['a','b','c','d']
//})


//var app = angular.module('myApp',[]);
//
////app.service('decorate',function() {
////    this.myFunc = function(x) {
////        return x + '~~~!!!~~~'
////    }
////});
////
////app.filter('myF',['decorate',function(decorate) {
////    return function (x) {
////        return decorate.myFunc(x);
////    }
////}]);
//
//app.controller('myC',function($scope) {
//    $scope.cars=[
//        {model : "Ford Mustang", color : "red"},
//        {model : "Fiat 500", color : "white"},
//        {model : "Volvo XC90", color : "black"}
//    ];
//});


//var app = angular.module('myApp',[]);
//app.controller('myC',function($scope) {
//   $scope.cars = [
//        {model : "Ford Mustang", color : "red"},
//        {model : "Fiat 500", color : "white"},
//        {model : "Volvo XC90", color : "black"}
//   ]
//});

//var app = angular.module('myApp',[]);
//app.controller('myC',function($scope) {
//    $scope.people =
//    {
//        people_1: 'alex',
//        people_2: 'jim',
//        people_3: 'rose',
//        people_4: 'billy'
//    }
//
//});

//var app = angular.module('myApp',[]);
//app.controller('myC',function($scope) {
//   $scope.cars = {
//       car01 : {brand : "Ford", model : "Mustang", color : "red"},
//       car02 : {brand : "Fiat", model : "500", color : "white"},
//       car03 : {brand : "Volvo", model : "XC90", color : "black"}
//    }
//});




//chapter 12

//var app = angular.module('myApp',[]);
//app.controller('myC',function($scope,$http) {
//    $http.get('msg.json')
//        .then(function(response) {
//            $scope.myMsg = response.data.msg;
//        })
//});



//chapter 13 SQL


//chapter 15


//var app = angular.module('myApp',[]);
//app.controller('myC',function($scope) {
//    $scope.first = 'alex';
//    $scope.last = 'wang';
//    $scope.value = false;
//    //$scope.value = true;
//    $scope.toggle = function() {
//        $scope.value = !$scope.value;
//    }
//})


//var app = angular.module('myApp',[]);
//app.controller('myC',function($scope) {
//    $scope.myMove = function(space) {
//        $scope.x = space.offsetX;
//        $scope.y = space.offsetY
//    }
//})



//chapter 16


//var app = angular.module('myApp',[]);
//app.controller('myC',function($scope) {
//    $scope.master={first:'alex',last:'wang'};
//    $scope.reset = function() {
//        $scope.user = angular.copy($scope.master)
//    }
//    $scope.reset();
//})




//chapter 17


//var app = angular.module('myApp',[]);
//app.controller('myC',function($scope){
//    $scope.name = 'alex';
//    $scope.email = 'alexwolfwang@gmail.com'
//})


var app = angular.module('myApp',[]);
app.directive('myFilter',function() {
    return {
        require: 'ngModel',
        link:function(scope,element,attr,mCtrl) {
            function myFilter(value) {
                if(value.indexOf('a') > -1) {
                    mCtrl.$setValidity('charE',true)
                } else {
                    mCtrl.$setValidity('charE',false)
                }
                return value;
            }
            mCtrl.$parsers.push(myFilter)
        }
    }
})