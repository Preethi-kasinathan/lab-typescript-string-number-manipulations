var StringManipulation = /** @class */ (function() {
    function StringManipulation() {}
    StringManipulation.prototype.print = function(word) {
        console.log(word);
        console.log(word.toUpperCase());
        console.log(word.toLowerCase());
        console.log(word.charAt(0));
        console.log(word.concat('  FacePrepPrograd'));
        console.log(word.slice(0, 4));
        console.log(word.length);
    };
    StringManipulation.prototype.printWithSpace = function(sentence) {
        console.log(sentence.split("").join(" "));
    };
    StringManipulation.prototype.findVowel = function(str) {
        console.log(str.replace(/[^aeiouAEIOU]/gi, "").length);
    };
    return StringManipulation;
}());
var string = new StringManipulation();
string.print('HelloProGrads');
string.printWithSpace('HelloProGrads');
string.findVowel('HelloProGrads');
var NumberManipulation = /** @class */ (function() {
    function NumberManipulation() {}
    NumberManipulation.prototype.findPrime = function(num) {
        console.log(num);
        if (num % 2 == 0) {
            console.log(num + " NOT A PRIME");
        } else {
            console.log(num + "PRIME");
        }
    };
    NumberManipulation.prototype.findMagic = function(num) {
        console.log(num);
        if (num % 9 == 1) {
            console.log(num + "MAGIU NUMBER");
        } else {
            console.log(num + " NOT A MAGIC NUMBER");
        }
    };
    return NumberManipulation;
}());
var num1 = new NumberManipulation();
num1.findPrime(58);
num1.findMagic(25);