
var fortuneList = [ "You gonne die muthafucka!", 
                    "All the bad things in life will happen to you and nobody else", 
                    "Errythang gon b ok", 
                    "I see lots o lovin in your future", 
                    "Meh.",
                    "OMG. You are, like, sooooooooo lucky!"
                    ]


module.exports = {getFortune: function getFortune () {
    return fortuneList[Math.floor(Math.random() * 5)];
    }
    
};

