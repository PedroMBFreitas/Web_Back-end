var log = {
    info: function(info){
        console.log('Info: ' + info);
    },
    warning: function(warning){
        console.log('Warning: ' + warning);
    },
    error: function(error){
        console.log('Error: ' + error);
    }
    
};
module.exports.log = log;

var log2 = {
    update: function(update){
        console.log('Update: ' + update);
    }
};
module.exports.log2 = log2;