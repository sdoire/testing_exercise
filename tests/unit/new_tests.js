describe('multiFunction', function() {
    var multiFunction = function(x, y){
        var eval = x * y;
        return eval;
    };
    it('multiplies two numbers together', function () {
        expect(multiFunction(2, 7)).toEqual(14);
    });
});

describe('divideFunction', function(){
    var divideFunction = function(x, y){
        var eval = x / y;
        return eval;
    };
    it('divides two numbers', function(){
       expect(divideFunction(8, 2)).toEqual(4);
    });
});

describe('subtractFunction', function(){
    var subtractFunction = function(x, y){
        var eval = x - y;
        return eval;
    };
    it('subtracts one number from another', function(){
        expect(subtractFunction(4, 2)).toEqual(2);
    });
});

describe('greaterThanFunction', function(){
    var greaterThanFunction = function(x, y){
        return (x > y);
    };
    it('compares two numbers', function(){
        expect(greaterThanFunction(4, 3)).toBeTruthy();
    });
});

describe('lessThanFunction', function(){
    var lessThanFunction = function(x, y){
        return (x < y);
    };
    it('compares two numbers', function(){
        expect(lessThanFunction(5, 2)).toBeFalsy();
    });
});

describe('testEqualityFunction', function(){
    var testEqualityFunction = function(x, y){
        return (x == y);
    };
    it('tests equality of two numbers', function(){
        expect(testEqualityFunction(3, 3)).toBeTruthy();
    });
});

describe('testEndOfWordFunction', function(){
    var testEndOfWordFunction = function(x){
        return x;
    };
    it('tests the last letter in word', function(){
        expect(testEndOfWordFunction('wise')).toEndWith('e');
    });
});

describe('compareStringLengthFunction', function(){
    var compareStringLengthFunction = function(x){
        return x;
    };
    it('compares length of two strings', function(){
        expect(compareStringLengthFunction('hello')).toBeSameLengthAs('howdy');
    });
});

describe('searchForSubstringFunction', function(){
    var searchForSubstringFunction = function(x){
        return x;
    };
    it('looks for substring within larger string', function(){
        expect(searchForSubstringFunction('computer')).toContain('put');
    });
});