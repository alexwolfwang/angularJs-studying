/**
 * Created by Alex.W on 2016/8/7.
 */
//var app = angular.module('myNoteApp',[]);
//app.controller('myNoteController',function($scope) {
//    $scope.msg="";
//    $scope.left = function() {
//        return 200 - $scope.msg.length;
//    };
//
//    $scope.clear = function() {
//        $scope.msg = "";
//    };
//
//    $scope.save = function() {
//        alert("Note Saved!");
//    }
//});


var app = angular.module("myShoppingList",[]);

app.controller("mySCtrl",function($scope) {
    $scope.products = ["Milk","Bread","Meat"];
    $scope.addItem = function() {
        $scope.errortext="";
        if(!$scope.addMe) {
            return;
        }
        if($scope.products.indexOf($scope.addMe) !== -1) {
            $scope.errortext = "this item is existed!"
        } else {
            $scope.products.push($scope.addMe);
        }
    };

    $scope.removeItem = function(x) {
        $scope.errortext = "";
        $scope.products.splice(x,1);
    }
})