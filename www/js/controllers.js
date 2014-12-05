angular.module('popick.controllers', [])

.controller('AppCtrl', function($scope, $state, $ionicModal, $timeout, ChatListService, ContactService) {
  // Form data for the login modal
  $scope.loginData = {};

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      //$scope.closeLogin();
      $state.go('app.home');
    }, 1000);
  };
  
  $scope.chatlist = ChatListService.get();
  $scope.contactList = ContactService.get();
  
  $scope.showContacts = function(contacts) {
    var contactsDisplay = "";
    for (var prop in contacts) {
      if (prop > 0) {
        contactsDisplay += ", ";
      }
      var contactId = contacts[prop];
      if (parseInt(contactId) == -1) {
        contactsDisplay += "me";
      } else {
        contactsDisplay += $scope.contactList[contactId]['displayName'];
      }
    }
    console.log("contactsDisplay=" + contactsDisplay);
    return contactsDisplay;
  };
})

.controller('HomeCtrl', ['$scope', 'NativeContactService', 'Camera', 
  function($scope, NativeContactService, Camera) {

    $scope.data = {
      selectedBuyer : [],
      selectedApprovers: []
    };
    
    $scope.pickBuyer = function() {
      NativeContactService.pickContact().then(
          function(contact) {
              $scope.data.selectedBuyer.push(contact);
              console.log("Selected contacts=");
              console.log($scope.data.selectedBuyer);
          },
          function(failure) {
              console.log("Bummer.  Failed to pick a buyer");
          }
      );
    }
    
    $scope.pickApprovers = function() {
      NativeContactService.pickContact().then(
          function(contact) {
              $scope.data.selectedApprovers.push(contact);
              console.log("Selected contacts=");
              console.log($scope.data.selectedApprovers);
          },
          function(failure) {
              console.log("Bummer.  Failed to pick approvers");
          }
      );
    }
    
    $scope.takeCamera = function() {
      NativeContactService.pickContact().then(
          function(contact) {
              $scope.data.selectedBuyer.push(contact);
              console.log("Selected contacts=");
              console.log($scope.data.selectedBuyer);
          },
          function(failure) {
              console.log("Bummer.  Failed to take camera");
          }
      );
    }
    
    $scope.pickImage = function() {
      NativeContactService.pickContact().then(
          function(contact) {
              $scope.data.selectedBuyer.push(contact);
              console.log("Selected contacts=");
              console.log($scope.data.selectedBuyer);

          },
          function(failure) {
              console.log("Bummer.  Failed to pick a contact");
          }
      );
    }
}])

.controller('VoteFormController', ['$scope', '$state', function($scope, $state) {
  $scope.askForVote = function(oneChat) {
    chat = {};
    chat['approvers'] = $scope.data.selectedBuyer;
    chat['title'] = oneChat.comment;
    chat['image'] = "img/cover.jpg";
    chat['id'] = $scope.chatlist.length;
    chat['comments'] = [];
    $scope.chatlist.push(chat);
    $state.go('app.chat', {chatId:chat['id']});
  };
}])

.controller('ChatlistCtrl', function($scope) {
})

.controller('ChatCtrl', ['$scope', '$stateParams', '$ionicPopup',
  function($scope, $stateParams, $ionicPopup) {
    $scope.chat = $scope.chatlist[$stateParams.chatId];
    
    $scope.sendComment = function(comment) {
      console.log("comment sent: " + comment);
      //$scope.chat.comments.push({comment:comment,contact:-1});
      $scope.chat.comments.push({comment:comment,contact:-1});
      /*
      $ionicPopup.alert({
              title: 'Success',
              content: comment
      });
      */
    };
  }
]);
