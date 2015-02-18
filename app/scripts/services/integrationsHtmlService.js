'use strict';

/**
* integrations service
*
* Description
*   service to parse and get tags from html
*/

angular.module('integrationsApp')
    .service('integrationsHtmlService', ['tagDictionary',
        function (tagDictionary){
            var htmlParser = {};

            htmlParser.getHtmlTags = function(html){
                var rawTags = getRawTags(html);
                return getFormattedTags(rawTags);
            };

            function getRawTags(html){
                var regex = /name=(\w+)/g;
                var htmlTags = [], found = [];
                while((found = regex.exec(html))){
                    htmlTags.push(found[1]);
                }
                return htmlTags;
            }

            function getFormattedTags(tags){
                var htmlTags = getTagsWithPrefixes(tags);
                return getValidTags(htmlTags);
            }

            function getTagsWithPrefixes(tags){
                var companyPrefix = 'company|';
                var customerPrefix = 'customer|';
                var formattedTags = [];

                tags.forEach(function(curr){
                    if (curr.substr(0,4).localeCompare('rep_') === 0){
                        formattedTags.push(companyPrefix.concat(curr));
                    } else {
                        formattedTags.push(customerPrefix.concat(curr));
                    }
                });
                return formattedTags;
            }

            function getValidTags(tags){
                var temp = [];
                tags.forEach(function(curr){
                    if (tagDictionary[curr]){
                        temp.push(curr);
                    }
                });
                return temp;
            }

            return htmlParser;
}]);