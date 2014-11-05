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
  
  $scope.chatlist = [
    { title: "Do you like this?", people: [{'displayName':'Nick Larson'}], id: 0, image: "img/cover.jpg" },
    { title: "What do you think of it?", people: [{'displayName':'Nick Larson'}, {'displayName':'Sophie'}, {'displayName':'Paul'}], id: 1, image: "img/cover.jpg" },
    { title: "Should I get it?", people: [{'displayName':'Erik Archer'}, {'displayName':'Evy'}], id: 2, image: "img/cover.jpg" },
    { title: "Buy or not buy?", people: [{'displayName':'Glenn Liao'}], id: 3, image: "img/cover.jpg" },
    { title: "I want this", people: [{'displayName':'Alex Linda'}, {'displayName':'Alain'}], id: 4, image: "img/cover.jpg" },
    { title: "Like it?", people: [{'displayName':'Reese'}], id: 5, image: "img/cover.jpg" },
    { title: "Yum?", people: [{'displayName':'Sharon'}], id: 6, image: "img/cover.jpg" }
  ];
  
  $scope.showContacts = function(contacts) {
    var contactsDisplay = "";
    for (var prop in contacts) {
      if (prop > 0) {
        contactsDisplay += ", ";
      }
      contactsDisplay += contacts[prop]['displayName'];
    }
    console.log("contactsDisplay=" + contactsDisplay);
    return contactsDisplay;
  };
})

.controller('HomeCtrl', ['$scope', 'ContactsService', 'Camera', 
  function($scope, ContactsService, Camera) {
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

.controller('ExampleController', ['$scope', '$state', function($scope, $state) {
  $scope.askForVote = function(oneChat) {
      chat = {};
      chat['people'] = $scope.data.selectedContacts;
      chat['title'] = oneChat.comment;
      chat['image'] = "img/cover.jpg";
      chat['id'] = $scope.chatlist.length;
      $scope.chatlist.push(chat);
      $state.go('app.chat', {chatId:chat['id']});
    }
}])

.controller('ChatlistCtrl', function($scope) {
})

.controller('ChatCtrl', ['$scope', '$stateParams',
  function($scope, $stateParams) {
    $scope.chat = $scope.chatlist[$stateParams.chatId];  
  }
]);
