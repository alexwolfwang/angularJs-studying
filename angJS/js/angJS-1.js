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


//var app = angular.module('myApp',[]);
//
//app.controller('myC',function($scope,$location) {
//    $scope.myUrl = $location.absUrl();
//})


//var app = angular.module('myApp',[]);
//app.controller('myC',function($scope, $http) {
//    $http.get('msg.php').then(function(response) {
//        $scope.myMsg = response.data;
//    })
//})

//var app = angular.module('myApp',[]);
//app.controller('myc',function($scope,$timeout) {
//    $scope.myMsg = "it's a message!";
//    $timeout(function() {
//        $scope.myMsg ='see? it was changed!'
//    },2000)
//})

//var app = angular.module('myApp',[]);
//app.controller('myC',function($scope,$interval) {
//    $scope.myTime = new Date().toLocaleString();
//    $interval(function() {
//        $scope.myTime = new Date().toLocaleString();
//    },1000)
//})

//var app = angular.module('myApp',[]);
//app.service('calculate',function() {
//    this.numberSquare = function(x) {
//        return Math.pow(x,2);
//    }
//});
//
//app.controller('myC',function($scope,calculate) {
//        $scope.result = calculate.numberSquare(4)
//
//})


//var app = angular.module('myApp',[]);
//app.service('cal',function() {
//    this.myFunc = function(x) {
//        return Math.pow(x,2)
//    }
//});
//
//app.filter('myForm',['cal',function(cal) {
//    return function (x) {
//        return cal.myFunc(x)
//    }
//}]);

//var app = angular.module('myApp',[]);
//
//app.service('cal',function() {
//    this.myFun = function(x) {
//        return Math.pow(x,2)
//    }
//});
//
//
//app.filter('myFilter',['cal',function(cal) {
//    return function (x) {
//        return cal.myFun(x);
//    }
//}]);
//
//
//app.controller('myC',function($scope) {
//    $scope.counts = [1,2,3,4,5]
//})



//chapter 10


//var app = angular.module('myApp',[]);
//app.controller('myC',function($scope,$http) {
//    $http.get('msg.json')
//        .then(function(response) {
//            $scope.myMsg = response.data.msg
//        })
//})


var app = angular.module('myApp',[]);
app.controller('myC',function($scope,$http) {
    $http.get('wrongname.html')
        .then(function(response) {
            $scope.content = response.data;
            $scope.statusData = response.status;
            $scope.statusNum = response.statusText;
        },function(response) {
            $scope.content = 'wrong !!!'
        })
})