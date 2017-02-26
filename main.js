var random = require("random");
var ImageJS = require("imagejs");
function randomCallback(integers){
// Prints row 0, column 0
    console.log(integers);
}
var options = {
	secure: true, // Make the request secure
    num: 10000,      // Get 10 integers
    min: 0,     // Minimum of -10
    max: 256,      // Maximum of 10
    col: 3,       // 2 columns
    base: 10,     // Use Base 16
    rnd: "id.123" // Which set of random numbers to use
};
function errorCallback(type,code,string){
    console.log("RANDOM.ORG Error: Type: "+type+", Status Code: "+code+", Response Data: "+string);
}
random.generateIntegers(randomCallback,options,errorCallback);

var bitmap = new ImageJS.Bitmap({width: 128, height: 128});
 
// Create a bitmap filled with green 
//var greenBitmap = new ImageJS.Bitmap({width: 100, height: 100, color: {r: 255, g: 255, b: 255, a: 255});
 
// Copy a bitmap 
//var copy = new ImageJS.Bitmap(otherBitmap);
 
// Create a bitmap and attach to supplied data structure 
/*var attachedBitmap = new ImageJS.Bitmap({
    width: 100,
    height: 100,
    data: new Buffer(4 * 100 * 100)
});*/
 
// Create an empty (null) bitmap, ready for reading from file or stream 
//var nullBitmap = new ImageJS.Bitmap();
//console.log(bitmap);
return bitmap.writeFile("image.png", { quality:75 })
    .then(function() {
        // bitmap has been saved 
});
