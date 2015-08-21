var app = angular.module("myApp", []);

app.controller('NameController', function NameController($scope){
    $scope.first = "Joel";
    $scope.middle = "Thomas";
    $scope.last = "Miller";


    $scope.getFirst = function(){
        return $scope.first;
    };

    $scope.getMiddle = function(){
        return $scope.middle;
    };

    $scope.getLast = function(){
        return $scope.last;
    };

    $scope.getFullName = function(){
        return $scope.first + ' ' + $scope.middle + ' ' + $scope.last;
    }
});

app.controller('PasswordController', function PasswordController($scope) {
        $scope.password = 'test';
        $scope.grade = function() {
            var size = $scope.password.length;
            if (size > 8) {
                $scope.strength = 'strong';
            } else if (size > 3) {
                $scope.strength = 'medium';
            } else {
                $scope.strength = 'weak';
            }
        };
});

app.controller('MathController', function MathController($scope){
    $scope.eval = 0;
    $scope.math = function(x, y) {
        if (x > y){
            $scope.eval = x - y;
            return $scope.eval;
        } else if (y > x) {
            $scope.eval = y - x;
            return $scope.eval;
        } else {
            $scope.eval = 1;
            return $scope.eval;
        }
    }
});

app.controller('StringController', function StringController($scope){
    $scope.createUsername = function(firstname, lastname, birthmonth){
        $scope.username = firstname.substring(0,3) + lastname.substring(0,3) + birthmonth.substring(0,3);
    }
});

app.controller('BooleanController', function BooleanController($scope){
   $scope.approveLoan = function(income, debt){
       if (debt < .20 * income) {
           return true;
       } else {
           return false;
       }
   }
});