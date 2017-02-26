var random = require("random");
var ImageJS = require("imagejs");
var counter = 0;
var input = [];
//var integers;
var bitmap = new ImageJS.Bitmap({width: 128, height: 128});
function randomCallback(integers){
// Prints row 0, column 0
    //console.log(integers);
    for(var m = 0; m < 1000; m++){
        for(var k = 0; k < integers.length; k++){
            input[counter] = integers[k];
            counter++;
        }
    }
    //console.log(input.length);
    counter = 0;
    for(var i = 0 ; i < 128; i++){
        for (var j = 0; j < 128; j++) {
            var temp = integers[counter];
            var color = {r: temp, g: temp, b: temp};
            bitmap.setPixel(i,j,color);
            counter++;
        }
    }
}
var options = {
	secure: true, // Make the request secure
    num: 100,      // Get 10 integers
    min: 0,     // Minimum of -10
    max: 256,      // Maximum of 10
    col: 0,       // 2 columns
    base: 10,     // Use Base 16
    rnd: "new" // Which set of random numbers to use
};
function errorCallback(type,code,string){
    console.log("RANDOM.ORG Error: Type: "+type+", Status Code: "+code+", Response Data: "+string);
}
random.generateIntegers(randomCallback,options,errorCallback);


return bitmap.writeFile("image.jpg", { quality:90 })
    .then(function() {
        // bitmap has been saved 
});
