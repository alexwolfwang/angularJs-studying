//var app = angular.module('myApp',[]);
//app.controller('myC',function($scope) {
//    $scope.first = 'alex';
//    $scope.last = 'wang'
//})

//var app = angular.module('myApp',[]);
//app.directive('myD',function() {
//    return {
//        restrict : 'C',
//        template : '<h1>itch!</h1>'
//    }
//})


//chapter 5


//var app = angular.module('app',[]);
//app.controller('myc',function($scope) {
//    $scope.n = 'alex'
//})



//chapter 6



//var app = angular.module('myApp',[]);
//
//app.controller('myC',function($scope,$rootScope) {
//    $scope.names=['alex','bebe','catherine','dick'];
//    $rootScope.ages=['29','24','34','19']
//})



//chapter 7


//var app = angular.module('myApp',[]);
//app.controller('myc',function($scope) {
//    $scope.f = 'alex';
//    $scope.l = 'wang'
//})

//var app = angular.module('mya',[]);
//app.controller('myc',function($scope) {
//    $scope.first = 'alex';
//    $scope.last = 'wang';
//    $scope.time = function() {
//        var myT = new Date();
//        return myT.toLocaleString();
//    }
//    $scope.full = function() {
//        return $scope.first + ' ' + $scope.last;
//    }
//})



//chapter 8


//var app = angular.module('myApp',[]);
//
//app.controller('myc',function($scope) {
//    $scope.last = 'Wang';
//    $scope.first = 'Alex';
//    $scope.price = 32.44;
//    $scope.list = [
//        {name:'alex',country:'China'},
//        {name:'Jack',country:'UK'},
//        {name:'Joe',country:'Denmark'},
//        {name:'Gustav',country:'Sweden'},
//        {name:'Birgit',country:'Denmark'},
//        {name:'Mary',country:'England'},
//        {name:'Kai',country:'Norway'},
//        {name:'Margareth',country:'England'}
//    ];
//    $scope.names=[
//        'Jani',
//        'Carl',
//        'Margareth',
//        'Hege',
//        'Joe',
//        'Gustav',
//        'Birgit',
//        'Mary',
//        'Kai'
//    ]
//
//})


//var app = angular.module('myApp',[]);
//app.controller('myc',function($scope) {
//    $scope.names=[
//        {name:'Jani',country:'Norway'},
//        {name:'Carl',country:'Sweden'},
//        {name:'Margareth',country:'England'},
//        {name:'Hege',country:'Norway'},
//        {name:'Joe',country:'Denmark'},
//        {name:'Gustav',country:'Sweden'},
//        {name:'Birgit',country:'Denmark'},
//        {name:'Mary',country:'England'},
//        {name:'Kai',country:'Norway'}
//    ];
//    $scope.myorder = function(x) {
//        $scope.haha = x;
//    }
//})

//var app = angular.module('myApp',[]);
//app.controller('myc',function($scope) {
//    $scope.names=[
//        'Jani',
//        'Carl',
//        'Margareth',
//        'Hege',
//        'Joe',
//        'Gustav',
//        'Birgit',
//        'Mary',
//        'Kai'
//    ];
//});
//
//app.filter('myfilter',function() {
//
//    return function(x) {
//        var i, c,text='';
//
//        for(i=0;i< x.length;i++) {
//            c = x[i];
//            if(i%2 == 0) {
//                c = c.toUpperCase();
//            }
//            text += c;
//        }
//        return text;
//    }
//})



//chapter 9


