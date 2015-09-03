angular.module('MainCtrl', []).controller("MainController", function($scope, $firebaseArray, $http) {


    var ref = new Firebase("https://agrocore.firebaseio.com/kerosene/");
    $scope.data = $firebaseArray(ref);
    // add new items to the array
    // the message is automatically added to our Firebase database!
    $scope.addMessage = function() {
        $scope.data.$add({
            number: $scope.newMessageText
        });
        $scope.newMessageText = "";
    };

    $scope.tagline = "FEAN Boilerplate by Lantern.";







});
