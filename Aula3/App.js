/*
var greetMe = function(){
    console.log("Hallo!");
}
function log(fg){
    fg();
}
//greetMe();
//log(greetMe);

var dontGreetMe = function(){
    console.log("Ha!");
}
log(greetMe);
log(dontGreetMe);

// loading core modules--> var module = require('module_name'); exemplo: var http = requires('http');

var myLogModule = require('./Log.js');
//myLogModule.info('Node.js started');
//myLogModule.update('Node.js started');
myLogModule.log.info('uh ohh');

*/
//-----------------------------------EXERCICIOS------------------------------------------------//
var i;

var started = function (started){
    console.log('Download has started');
};
var update = function (update){
    console.log(i + '% of Download');
};
var completed = function(completed){
    console.log('Download is done!');
};
var performDownload = function(started, updated, completed){
    started();
    update();
    completed();    
};

for (i=0; i<=100;i=i+10){
    update(i);
    if (i==100){completed()}
}


var arrayUtils = require('./ArrayUtils');
var a = [1, 4, 3, 5, 6, -40];
/*
var min = arrayUtils.min(a);
var max = arrayUtils.max(a);
*/
var isEmpty = arrayUtils.isEmpty(a);

console.log(isEmpty);