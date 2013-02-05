var ConsoleMessageWriter = (function () {
    function ConsoleMessageWriter() { }
    ConsoleMessageWriter.prototype.writeMessage = function (message) {
        console.log(message);
    };
    return ConsoleMessageWriter;
})();
var Greeter = (function () {
    function Greeter(messageWriter) {
        this.messageWriter = messageWriter;
    }
    Greeter.prototype.sayHello = function (name) {
        this.messageWriter.writeMessage('HELLO ' + name);
    };
    return Greeter;
})();
var g = new Greeter(new ConsoleMessageWriter());
g.sayHello('PEEEER');
