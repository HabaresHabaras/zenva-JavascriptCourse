//Dont do this:
// var sayHello = function() {
    // console.log("Hello!");
        // };

//declare the sayHello() function inside of a unique object
//for it to not contradict information on another library, that may contain a fuction
//with the same name
var randomPersonalizedName = randomPersonalizedName || {};

randomPersonalizedName.sayHello = function() {
    console.log("hello");
};