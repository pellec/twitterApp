var __extends = this.__extends || function (d, b) {
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var App;
(function (App) {
    var Animal = (function () {
        function Animal(age, name) {
            this.age = age;
            this.name = name;
        }
        Animal.prototype.saySomething = function () {
            throw Error('do not call this!');
        };
        return Animal;
    })();
    App.Animal = Animal;    
    var Dog = (function (_super) {
        __extends(Dog, _super);
        function Dog(age, name) {
                _super.call(this, age, name);
            this.age = age;
            this.name = name;
        }
        Dog.prototype.saySomething = function () {
            alert('woff');
        };
        return Dog;
    })(Animal);
    App.Dog = Dog;    
})(App || (App = {}));
var d = new App.Dog(1, 'fido');
d.saySomething();
