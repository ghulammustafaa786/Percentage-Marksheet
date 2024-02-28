// Result class work//

var a = +prompt("Math 100")
var b = +prompt("Urdu 100")
var c = +prompt("English 100")
var d = +prompt("Chemistry 75")
var e = +prompt("Physics 75")
var f = +prompt("Pak Study 50")

var total = a+b+c+d+e+f
console.log(total);

var pre = total/500*100

console.log(pre);

if (pre > 79) {
    console.log("A+one");
    
}
else if (pre > 69) {
    console.log("A Gread");
    
}
else if (pre > 59) {
    console.log("B Gread");
    
}
else if (pre > 49) {
    console.log("C Gread");
    
}
else {
    console.log("D Gread");
}
