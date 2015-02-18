'use strict';

/**
 * @ngdoc function
 * @name integrationsAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the integrationsApp
 */

angular.module('integrationsApp')
    .controller('MainCtrl', ['$scope', '$window', 'fileService', 'sqlQueryService',
        function($scope, $window, fileService, sqlQueryService) {

            $scope.startProcess = function() {
                $scope.downloadReady = false;
                $scope.htmlFile = fileService.getFileFromDOM('htmlFile');

                if (fileIsValid()) {
                    fileService.readFile($scope.htmlFile, createDownloadFile);
                } else {
                    $window.alert('O arquivo inserido não é valido.');
                }
            };

            function fileIsValid() {
                if ($scope.htmlFile.size > 32768 ||
                    $scope.htmlFile.type.localeCompare('text/html') !== 0) {
                    return false;
                }
                return true;
            }

            function createDownloadFile(html) {
                var link = document.getElementById('donwloadLink');
                var sqlData = sqlQueryService.generateSQLfromHtml(html);

                link.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(sqlData));

                $scope.downloadReady = true;
                $scope.$apply();
            }

        }
    ]);