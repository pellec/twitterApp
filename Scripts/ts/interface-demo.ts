interface IMessageWriter {
    writeMessage(message: string);
}

class ConsoleMessageWriter implements IMessageWriter {
    writeMessage(message: string) {
        console.log(message);
    }
}

class Greeter {
    private messageWriter: IMessageWriter;
    constructor(messageWriter: IMessageWriter) {
        this.messageWriter = messageWriter;
    }

    sayHello(name: string) {
        this.messageWriter.writeMessage('HELLO ' + name);
    }
}

var g = new Greeter(new ConsoleMessageWriter());
g.sayHello('PEEEER');