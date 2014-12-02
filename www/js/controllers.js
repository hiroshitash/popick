angular.module('popick.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout, ChatListService, ContactService) {
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
  /*
  $scope.chatlist = [
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

  $scope.contactList = [{displayName:"Nick larson"}, {displayName:"Erik Archer"}, {displayName:"Sophie"},
                        {displayName:"Glenn Liao"}, {displayName:"Alex Linda"}, {displayName:"Evy"},
                        {displayName:"Reese"}, {displayName:"Sharon"}, {displayName:"Paul"},
                        {displayName:"XX2"}, {displayName:"XX3"}, {displayName:"Alain"}];
  */
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
