servicesModule
    .factory('ChatListService', function ($http, $q) {
    'use strict';

    var chatlist = [
    { title: "Do you like this?", buyer: [1], approvers: [0], id: 0, image: "img/cover.jpg",
      comments:[{comment:"comment1", contact:0},{comment:"comment2",contact:0}]},
    { title: "What do you think of it?", buyer: [1], approvers: [0, 2, 8],
      id: 1, image: "img/cover.jpg", comments:[{comment:"comment1", contact:8},{comment:"comment2",contact:2}] },
    { title: "Should I get it?", buyer: [0], approvers: [1, 5], id: 2, image: "img/cover.jpg",
      comments:[{comment:"comment1", contact:1},{comment:"comment2",contact:5}]},
    { title: "Buy or not buy?", buyer: [2], approvers: [3], id: 3, image: "img/cover.jpg",
      comments:[{comment:"comment1", contact:3},{comment:"comment2",contact:-1}]},
    { title: "I want this", buyer: [6], approvers: [4, 11], id: 4, image: "img/cover.jpg",
      comments:[{comment:"comment1", contact:4},{comment:"comment2",contact:11}]},
    { title: "Like it?", buyer: [8], approvers: [6], id: 5, image: "img/cover.jpg",
      comments:[{comment:"comment1", contact:-1},{comment:"comment2",contact:6}]},
    { title: "Yum?", buyer: [9], approvers: [7], id: 6, image: "img/cover.jpg",
      comments:[{comment:"comment1", contact:-1},{comment:"comment2",contact:7}]}
  	];

    var LOCAL_PATH = '/api/local/';
    return {
        get: function() {
        	/*
            var deferred = $q.defer();
            $http.get(LOCAL_PATH).then(function(res) {
                deferred.resolve(res.data);
            });

            return deferred.promise;
            */
            return chatlist;
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
