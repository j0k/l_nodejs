/**
 * Created by jo on 8/12/14.
 */
/**
 * Created by jo on 8/12/14.
 */
var genID = function (base){
    var randomnumber=100+Math.floor(Math.random()*101);
    return base+randomnumber.toString();
}

exports.genID = genID;

// just code
var sleep = function(ms) {
    ms += new Date().getTime();
    while (new Date() < ms){}
}

exports.sleep = sleep;