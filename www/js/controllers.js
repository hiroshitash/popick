angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {
  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('ChatlistCtrl', function($scope) {
  $scope.chatlist = [
    { title: 'Nick Larson, Sophie, Paul..', id: 1 },
    { title: 'Erik Archer, ', id: 2 },
    { title: 'Glenn Liao', id: 3 },
    { title: 'Alex Linda, Alain', id: 4 },
    { title: 'Reese', id: 5 },
    { title: 'Sharon', id: 6 }
  ];
})

.controller('HomeCtrl', ['$scope', 'ContactsService', 'Camera', 
  function($scope, ContactsService) {
    $scope.data = {
            selectedContacts : []
    };
    
    $scope.pickContact = function() {
      ContactsService.pickContact().then(
          function(contact) {
              $scope.data.selectedContacts.push(contact);
              console.log("Selected contacts=");
              console.log($scope.data.selectedContacts);

          },
          function(failure) {
              console.log("Bummer.  Failed to pick a contact");
          }
      );
    }
    
    $scope.takeCamera = function() {
      ContactsService.pickContact().then(
          function(contact) {
              $scope.data.selectedContacts.push(contact);
              console.log("Selected contacts=");
              console.log($scope.data.selectedContacts);

          },
          function(failure) {
              console.log("Bummer.  Failed to take camera");
          }
      );
    }
    
    $scope.pickImage = function() {
      ContactsService.pickContact().then(
          function(contact) {
              $scope.data.selectedContacts.push(contact);
              console.log("Selected contacts=");
              console.log($scope.data.selectedContacts);

          },
          function(failure) {
              console.log("Bummer.  Failed to pick a contact");
          }
      );
    }

}])

.controller('ChatCtrl', function($scope, $stateParams) {
});
