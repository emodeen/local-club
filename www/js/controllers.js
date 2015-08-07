angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {
  
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});
  
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

  // Open the Edit Venue modal
  $scope.rename = function(playlist) {
      $scope.modal.show();

      // Pass in $index so we know which one to rename
      //console.log(playlist.title);
  };

  // Perform the Save action when the user submits the Edit Venue form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    //$scope.playLists[n].push  

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('PlaylistsCtrl', function($scope) {
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

  // Open the Edit Venue modal
  $scope.edit = function() {
     $scope.modal.show();

     console.log('edit function called ' + $scope.playlists[2].title);
  };

    
})

.controller('AddCtrl', function($scope, $stateParams) {
    console.log('test');
})

.controller('PlaylistCtrl', function($scope, $stateParams) {


});

