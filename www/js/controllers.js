angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {
  
  // Form data for the login modal
  $scope.loginData = {};

  // Create the Edit Venue modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the Edit Venue modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];

  $scope.newTask = function() {
    $scope.playlists.push({ title: 'New task', id: 7 });
  };

  // Edit a venue
  $scope.edit = function(playlist) {
     $scope.modal.show();
  };
    
  // Called when the Submit button is clicked
  $scope.doLogin = function() {
    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('PlaylistsCtrl', function($scope) {

})
;

