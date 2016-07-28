/**
 * Created by Alex.W on 2016/7/28.
 */
//var app = angular.module('myApp',[]);
//app.controller('myC',function($scope) {
//    $scope.x = 'alex and ELIANE';
//    $scope.y = angular.uppercase($scope.x);
//    $scope.z = angular.lowercase($scope.x);
//    $scope.w = angular.isString($scope.x);
//    $scope.p = angular.isNumber($scope.x)
//})


var app = angular.module('myApp',[]);
app.controller('myC',function($scope) {
    $scope.first = '';
    $scope.last = '';
    $scope.password1 = '';
    $scope.password2 = '';
    $scope.users = [
        {id:1,first:'Alex',last:'Wang'},
        {id:2,first:'James',last:'Gorden'},
        {id:3,first:'Bruce',last:'Wayne'},
        {id:4,first:'Clark',last:'Kent'},
        {id:5,first:'Lois',last:'Lane'},
        {id:6,first:'Barry',last:'Allen'},
        {id:7,first:'Reverse',last:'Flash'},
        {id:8,first:'Logan',last:'Wolverine'},
        {id:9,first:'Dead',last:'Pool'}
    ];

    $scope.edit = true;
    $scope.error = false;
    $scope.incomplete = false;
    $scope.hideForm = true;

    $scope.editUser = function(id) {
        $scope.hideForm = false;
        $('form').fadeIn();
        if(id == 'new') {
            $scope.first = '';
            $scope.last = '';
            $scope.edit = true;
        } else {
            $scope.edit = false;
            $scope.first = $scope.users[id -1].first;
            $scope.last = $scope.users[id -1].last;
        }
    };
    $scope.$watch('password1',function(){$scope.test()});
    $scope.$watch('password2',function(){$scope.test()})

    $scope.test = function() {
        if($scope.password1 !== $scope.password2) {
            $scope.error =true;
        } else {
            $scope.error = false;
        }
        $scope.incomplete = false;
        if($scope.edit && (!$scope.first.length || !$scope.first.length ||
            !$scope.password1.length || !$scope.password2.length)) {
            $scope.incomplete = true;
        }
    }
})