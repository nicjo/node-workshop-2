var fortune = require("./library/fortune.js")

process.argv.forEach(function(val, index, array){
    
    if (index === 2) {
        for (var i = 0; i < parseInt(val); i++) {
            console.log(fortune.getFortune());
        }
    }
});