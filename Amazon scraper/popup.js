let amazonextension = angular.module("amazonextension",['ui.router']);

amazonextension.config(['$stateProvider','$urlRouterProvider',function($stateProvider, $urlRouterProvider){

    $stateProvider.state('home',{
        url: '/home',
        templateUrl: 'home.html'
    })
    $stateProvider.state('login',{
        url: '/login',
        templateUrl: 'login.html'
    })
    $stateProvider.state('signup',{
        url: '/signup',
        templateUrl: 'signup.html'
    })

    $urlRouterProvider.otherwise('login');
}])

amazonextension.controller('loginCtrl',function($scope,$location){
    $scope.submit = function(){
        let cred = {sl:"login",idpass:{username: $scope.username, password: $scope.password}};
        console.log(cred);
        chrome.runtime.sendMessage(cred);
    }
    $scope.signup = function(){
        $location.path('signup');
    }
})
amazonextension.controller('signupCtrl',function($scope,$location){
    $scope.submit = function(){
        let cred = {sl:"signup",idpass:{username: $scope.username, password: $scope.password}};
        console.log(cred);
        chrome.runtime.sendMessage(cred);
    }
})

