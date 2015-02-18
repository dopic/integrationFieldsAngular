'use strict';

/**
 * sqlQueryService service
 *
 * Description
 *   service for creating an insert query from a Promob pt.data.html text file
 */

angular.module('integrationsApp')
    .service('sqlQueryService', ['integrationsHtmlService', 'tagDictionary',
        function(integrationsHtmlService, tagDictionary) {
            var sqlQueryService = {};

            sqlQueryService.generateSQLfromHtml = function(html) {
                var tags = integrationsHtmlService.getHtmlTags(html);
                return createQuery(tags);
            };

            function createQuery(tags) {
                var query = [];
                var queryTemplate = 'INSERT INTO IntegrationsFields (id, integrationID, tableID, managerField, integrationField, integrationRule, lastUpdate) VALUES (NEWID(), @integrationID, @tableID, {0}, {1} ,\'\',GETUTCDATE())';

                tags.forEach(function(curr) {
                    query.push(queryTemplate.format(tagDictionary[curr], curr));
                });
                return query.join('\r\n');
            }

            return sqlQueryService;
        }
    ]);