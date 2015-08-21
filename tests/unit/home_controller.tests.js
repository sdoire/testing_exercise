describe('HomeController', function() {
    it('adds two numbers together', function () {
      expect(1 + 2).toEqual(3);
    });
});

describe('HomeController', function() {
  it('adds two numbers together', function () {
    expect(1 + 4).toEqual(5);
  });
});

describe('HomeController', function() {
  it('adds two numbers together', function () {
    expect(1 + 5).toEqual(6);
  });
});

describe('NameController', function() {
  beforeEach(module('myApp'));

  var controller;

  beforeEach(inject(function ($rootScope, $controller, _$location_) {
    $location = _$location_;
    scope = $rootScope.$new();

    createController = $controller('NameController', {'$scope': scope});
  }));

  describe('$scope.grade', function() {
    it('sets the strength to "strong" if the password length is >8 chars', function() {
      var test = scope.getFirst();
      expect(test).toBe(scope.first);
      expect(scope.getFullName()).toBe('Joel Thomas Miller');
    });
  });
});

describe('HomeController', function() {
  beforeEach(module('myApp'));

  var controller;

  beforeEach(inject(function ($rootScope, $controller, _$location_) {
    $location = _$location_;
    scope = $rootScope.$new();

    createController = $controller('PasswordController', {'$scope': scope});
  }));

  describe('$scope.grade', function() {
    it('sets the strength to "strong" if the password length is >8 chars', function() {
      scope.password = 'longerthaneightchars';
      scope.grade();
      expect(scope.strength).toEqual('strong');
    });
  });
});

describe('MathController', function(){
  beforeEach(module('myApp'));

  beforeEach(inject(function ($rootScope, $controller, _$location_){
    $location = _$location_;
    scope = $rootScope.$new();

    createController = $controller('MathController', {'$scope': scope});
  }));

  describe('$scope.math', function(){
    it('compares two numbers and subtracts lesser from greater, or returns 1 if equal', function(){
      scope.math(4, 2);
      expect(scope.eval).toBeGreaterThan(0);
    })
  })
});

describe('StringController', function(){
  beforeEach(module('myApp'));

  beforeEach(inject(function ($rootScope, $controller, _$location_){
    $location = _$location_;
    scope = $rootScope.$new();

    createController = $controller('StringController', {'$scope': scope});
  }));

  describe('$scope.createUsername', function(){
    it('creates six character username using first 3 letters of user firstname and lastname', function(){
      scope.createUsername('Sarah', 'Doire', 'April');
      expect(scope.username).toBe('SarDoiApr');
      expect(scope.username.length).toBe(9);
    })
  })
});

describe('BooleanController', function(){
  beforeEach(module('myApp'));

  beforeEach(inject(function ($rootScope, $controller, _$location_){
    $location = _$location_;
    scope = $rootScope.$new();

    createController = $controller('BooleanController', {'$scope': scope});
  }));

  describe('$scope.approveLoan', function(){
    it('approves loan if debt is less than 20% of income', function(){
      expect(scope.approveLoan(100000, 19999)).toBeTruthy();
    })
  })
});
