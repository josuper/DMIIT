angular
    .module('MyApp', [
    'ngRoute',
    'MyApp.ctrl.crud',
    ])
    .config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {

        $routeProvider.when('/', {
            templateUrl: '/member/CRUD',
            controller: 'memberController'
        });

        $routeProvider.when('/Office/Index', {
            templateUrl: '/Office/CRUD',
            controller: 'officeController'
        });

        $routeProvider.when('/Project/Index', {
            templateUrl: '/Project/CRUDProject',
            controller: 'projectController'
        });

        $routeProvider.when('/Tarefa/Index', {
            templateUrl: '/Tarefa/CRUDTarefa',
            controller: 'tarefaController'
        });

        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        });

    }]);