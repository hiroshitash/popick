servicesModule
    .factory('LoginService', function ($http, $q) {
    'use strict';

    var LOCAL_PATH = '/api/local/';
    
    return {
        login: function(username, password) {
        	/*
            var deferred = $q.defer();
            $http.get(LOCAL_PATH).then(function(res) {
                deferred.resolve(res.data);
            });

            return deferred.promise;
            */
            return true;
        },
        create: function(username, password, email) {
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
