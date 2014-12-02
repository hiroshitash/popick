servicesModule
    .factory('ContactService', function ($http, $q) {
    'use strict';

    var LOCAL_PATH = '/api/local/';

    var contactList = [{displayName:"Nick larson"}, {displayName:"Erik Archer"}, {displayName:"Sophie"},
                        {displayName:"Glenn Liao"}, {displayName:"Alex Linda"}, {displayName:"Evy"},
                        {displayName:"Reese"}, {displayName:"Sharon"}, {displayName:"Paul"},
                        {displayName:"XX2"}, {displayName:"XX3"}, {displayName:"Alain"}];
    
    return {
        get: function() {
        	/*
            var deferred = $q.defer();
            $http.get(LOCAL_PATH).then(function(res) {
                deferred.resolve(res.data);
            });

            return deferred.promise;
            */
            return contactList;
        },
        create: function() {
            //todo                                                                                                  
        },
        update: function() {
            //todo                                                                                                  
        },
        find: function(params) {
        	/*
            var deferred = $q.defer();
            $http.get(LOCAL_PATH, {params: params}).then(function (res) {
                deferred.resolve(res.data);
            });
            return deferred.promise;
            */

        }
    };
});
