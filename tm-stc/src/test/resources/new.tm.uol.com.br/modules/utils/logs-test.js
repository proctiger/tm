
var prefix = "[UOL Tag Manager] ";
var msg = "Mensagem de log";

module("Logs", {
    teardown : function() {
        try {
            delete console.warn;
            delete console.info;
            delete console.error;
            delete console.log;
        } catch (e) {
            console.log('ERRO AO EXECUTAR BEFORE');
            return false;
        }
    }
});

test('Função de console.warn existe', function() {
    var message = new Message();
    message.warn(msg);

    var history = message.getHistory('warn')
    var lastLog = history[history.length-1];
    equal(lastLog, prefix + msg, "Deve logar no console: " + msg);
});

test('Função de console.warn não existe', function() {
    console.warn = false;

    var message = new Message();
    message.warn(msg);

    var history = message.getHistory('warn');
    var lastLog = history[history.length-1];
    equal(history.length, 0, "Não deve logar no console usando a função console.warn()");

    history = message.getHistory('log');
    lastLog = history[history.length-1];
    equal(lastLog, prefix + msg, "Deve logar no console: " + msg);
});

test('Função de console.error existe', function() {
    var message = new Message();
    message.error(msg);

    var history = message.getHistory('error')
    var lastLog = history[history.length-1];
    equal(lastLog, prefix + msg, "Deve logar no console: " + msg);
});

test('Função de console.error não existe', function() {
    console.error = false;

    var message = new Message();
    message.error(msg);

    var history = message.getHistory('error');
    var lastLog = history[history.length-1];
    equal(history.length, 0, "Não deve logar no console usando a função console.error()");

    history = message.getHistory('log');
    lastLog = history[history.length-1];
    equal(lastLog, prefix + msg, "Deve logar no console: " + msg);
});

test('Função de console.info existe', function() {
    var message = new Message();
    message.info(msg);

    var history = message.getHistory('info')
    var lastLog = history[history.length-1];
    equal(lastLog, prefix + msg, "Deve logar no console: " + msg);
});

test('Função de console.info não existe', function() {
    console.info = false;

    var message = new Message();
    message.info(msg);

    var history = message.getHistory('info');
    var lastLog = history[history.length-1];
    equal(history.length, 0, "Não deve logar no console usando a função console.info()");

    history = message.getHistory('log');
    lastLog = history[history.length-1];
    equal(lastLog, prefix + msg, "Deve logar no console: " + msg);
});

test('Função de console.log existe', function() {
    var message = new Message();
    message.log(msg);

    var history = message.getHistory('log')
    var lastLog = history[history.length-1];
    equal(lastLog, prefix + msg, "Deve logar no console: " + msg);
});

test('Função de console.log não existe', function() {
    console.log = false;

    var message = new Message();
    message.log(msg);
    var history = message.getHistory('log');
    equal(history.length, 0, "Não deve logar no console"); 
});

test('Mensagem com valor vazio', function() {
    var message = new Message();
    message.log('');
    var history = message.getHistory('log');
    equal(history.length, 0, "Não deve logar no console"); 
});

test('Mensagem somente com espaços', function() {
    var message = new Message();
    message.log('');
    var history = message.getHistory('log');
    equal(history.length, 0, "Não deve logar no console"); 
});