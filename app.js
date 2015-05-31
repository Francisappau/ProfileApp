var app = angular.module('portfolio', ['ui.router'])

    .config(['$stateProvider',
             '$urlRouterProvider',
        function($stateProvider, $urlRouterProvider) {

            $stateProvider
                .state('about', {
                    url: '/about',
                    templateUrl: 'home/_about.html'
                })

                .state('skills', {
                    url: '/skills',
                    templateUrl: 'home/_skills.html'
                })

                .state('portfolio', {
                    url: '/portfolio',
                    templateUrl: 'home/_portfolio.html'
                })
                 .state('resume', {
                    url: '/resume',
                    templateUrl: 'home/_resume.html'
                })
                .state('contact', {
                    url: '/contact',
                    templateUrl: 'home/_contact.html',
                    controller:'ContactCtrl'
                });             

            $urlRouterProvider.otherwise('about');
        }]);

