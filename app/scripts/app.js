'use strict';
/**
 * @ngdoc main controller
 * @name integrationsApp
 * @description
 * # creates a sql file to insert the client integrations fields on the database
 *
 * Main module of the application.
 */

angular
    .module('integrationsApp', ['ngRoute'])
        .config(['$routeProvider',
            function ($routeProvider) {
                $routeProvider
                    .when('/', {
                        templateUrl: 'views/main.html',
                        controller: 'MainCtrl',
                        resolve :{
                            fileService : function(fileService){
                                return fileService;
                            },
                            sqlQueryService : function(sqlQueryService){
                               return sqlQueryService;
                            }
                        }
                    })
                    .otherwise({
                        redirectTo: '/'
                    });
}]);
