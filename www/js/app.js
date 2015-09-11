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
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('home', {
      abstract: true,	    
      url: '/',
      views: {
	  home: {
	      template: '<ion-nav-view></ion-nav-view>'
	  }
      }
  })

  .state('home.index', {
      url: '',
      templateUrl: 'templates/playlists.html',
      controller: 'AppCtrl'
  })    

  .state('home.detail', {
    url: '/:num',
    templateUrl: 'templates/playlist.html',
    controller: 'PlaylistCtrl',
    resolve: {
      playlist: function($stateParams, PlaylistsService) {
	  // Pass the playlist index into getPlaylist
	  console.log("home.detail " + $stateParams.num); //undefined
          return PlaylistsService.getPlaylist($stateParams.num);
      }
    }      
  })

    
  .state('app', {
    url: "/app",
    templateUrl: "templates/menu.html",
    controller: 'AppCtrl'
  })

  .state('playlists', {
      abstract: true,
      url: "/playlists",
      views: {
	  playlists: {
              template: '<ion-nav-view></ion-nav-view>'
	  }
      }
  })

  .state('app.playlists', {
      url: "/playlists",
      views: {
        'menuContent': {
          templateUrl: "templates/playlists.html",
          controller: 'AppCtrl'
        }
      }
    })    

  .state('app.single', {
    url: "/playlists/:playlistId",
    views: {
      'menuContent': {
        templateUrl: "templates/playlist.html",
        controller: 'AppCtrl'
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/');
})

.factory('PlaylistsService', function() {
  var playlists = [
      {title: "Yard House", done: true},
      {title: "Kings", done: false},
      {title: "Joshua Tree", done: false}
   ]

  return {
    playlists: playlists,
      getPlaylist: function(index) {
	  console.log("factory " + index);
      return playlists[index]
    }
  }
});
