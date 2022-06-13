var x = 45;
document.getElementById("dec").innerHTML = x;


// string to binary
var y = (x << 0) >> 7;
var z = String(y)
y = (x << 1) >> 7;
z = z+String(y);


var y = (x << 0) >> 7;
var z = String(y);
y = (x << 1) >> 7;
z = z + String(y);
y = (x << 2) >> 7;
z = z + String(y);
y = (x << 3) >> 7;
z = z + String(y);
y = (x << 4) >> 7;
z = z + String(y);
y = (x << 5) >> 7;
z = z + String(y);
y = (x << 6) >> 7;
z = z + String(y);
y = (x << 7) >> 7;
z = z + String(y);

var bit_number = 7^1048;
// y = '0b00101101'
// var pielietot standarta js funkciju, kas pārveido dec to bin
document.getElementById("bin").innerHTML = z;
a = 45;

console.log(a);


// let carName = "Volvo";
//document.getElementById("demo").innerHTML = carName;
// <!-- scope, koda bloks, ko nodala ar {}-->

//var a=45;
// console.log("a vērtība (no 'galvenā zara' pirms scope")

// document.getElementById("demo").innerHTML = 456 || 0;
