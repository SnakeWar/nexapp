// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'ngCordova'])

    .run(function ($ionicPlatform) {
        $ionicPlatform.ready(function () {
            setTimeout(function() {
             navigator.splashscreen.hide();
             }, 300);
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            if (window.cordova && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
                cordova.plugins.Keyboard.disableScroll(true);

            }
            if (window.StatusBar) {
                // org.apache.cordova.statusbar required
                StatusBar.styleDefault();
            }
        });
    })

    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('home', {
                url: '/home',
                templateUrl: 'templates/home.html'
            })
            .state('app', {
                url: '/app',
                abstract: true,
                templateUrl: 'templates/menu.html'
            })
            .state('app.solicite', {
                url: '/solicite',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/solicite.html'
                    }
                }
            })
            .state('app.solicite2', {
                url: '/solicite2',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/solicite2.html'
                    }
                }
            })
            .state('app.solicite3', {
                url: '/solicite3',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/solicite3.html'
                    }
                }
            })
            .state('app.services', {
                url: '/services',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/services.html'
                    }
                }
            })
            .state('app.quemsomos', {
                url: '/quemsomos',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/quemsomos.html'
                    }
                }
            })
            .state('app.clientes', {
                url: '/clientes',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/clientes.html'
                    }
                }
            })
            .state('app.localizacao', {
                url: '/localizacao',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/localizacao.html',
                        controller: 'MapCtrl'
                    }
                }
            });
        // if none of the above states are matched, use this as the fallback
        $urlRouterProvider.otherwise('/home');
    });

