// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.service("ContactsService", ['$q', function($q) {
  var formatContact = function(contact) {
      return {
          "displayName"   : contact.name.formatted || contact.name.givenName + " " + contact.name.familyName || "Mystery Person",
          "emails"        : contact.emails || [],
          "phones"        : contact.phoneNumbers || [],
          "photos"        : contact.photos || []
      };
  };

  var pickContact = function() {
      var deferred = $q.defer();
      if(navigator && navigator.contacts) {
          navigator.contacts.pickContact(function(contact){

              deferred.resolve( formatContact(contact) );
          });
      } else {
          deferred.reject("Bummer.  No contacts in desktop browser");
      }
      return deferred.promise;
  };
  return {
      pickContact : pickContact
  };
}])

.factory('Camera', ['$q', function($q) {
 
  return {
    getPicture: function(options) {
      var q = $q.defer();
      
      navigator.camera.getPicture(function(result) {
        // Do any magic you need
        q.resolve(result);
      }, function(err) {
        q.reject(err);
      }, options);
      
      return q.promise;
    }
  }
}])

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
      url: "/app",
      abstract: true,
      templateUrl: "templates/menu.html",
      controller: 'AppCtrl'
    })
    
    .state('app.home', {
      url: "/home",
      views: {
        'menuContent' :{
          templateUrl: "templates/home.html",
          controller: 'HomeCtrl'
        }
      }
    })

    .state('app.chatlists', {
      url: "/chatlist",
      views: {
        'menuContent' :{
          templateUrl: "templates/chatlist.html",
          controller: 'ChatlistCtrl'
        }
      }
    })

    .state('app.single', {
      url: "/chat/:chattId",
      views: {
        'menuContent' :{
          templateUrl: "templates/chat.html",
          controller: 'ChatCtrl'
        }
      }
    });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/home');
});