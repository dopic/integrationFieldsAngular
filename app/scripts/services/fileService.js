'use strict';

/**
 * fileService service
 *
 * Description
 *   service for handling basic file operations
 */

angular.module('integrationsApp')
    .service('fileService', [
        function() {
            var fileService = {};

            fileService.getFileFromDOM = function(documentID) {
                var fileInput = document.getElementById(documentID);
                return fileInput ? fileInput.files[0] : null;
            };

            fileService.readFile = function(fileHandler, callback) {
                var fileReader = new FileReader();
                fileReader.onloadend = function(event) {
                    callback(event.target.result);
                };
                fileReader.readAsText(fileHandler);
            };

            return fileService;
        }
    ]);