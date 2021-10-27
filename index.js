// console.log(parseInt(3.76));    //3
// console.log(Math.ceil(3.12));   //4
// console.log(Math.floor(3.62));  //3
// console.log(Math.abs(-88))

function round (a){
    var qoldiq = a- parseInt(a);
    qoldiq>=0.5 && console.log(parseInt(a)+1);
    qoldiq<0.5 && console.log(parseInt(a));
}
round(4.66);

function ceil (a){
    console.log(parseInt(a)+1);
    return parseInt(a+1);
}
ceil(7.23);

function floor (a) {
    console.log(parseInt(a));
    return parseInt(a);
}
floor(5.89);

function abs (a) {
    a>=0 && console.log(a);
    a<0 && console.log(-a);
}

abs(-88);

let sqrt = function (a){
    console.log(a**0.5);
    return a**0.5;
}
sqrt(25);

//arrow function
const cbrt = (a) => {
    console.log(a**(1/3));
    return a**(1/3);
}
cbrt(27);

function pow(a, b) {
    console.log(a**b);
    return a**b;
}
pow(3,4);

//2-misol
var weCount = 0;
var aCount = 0;
var bCount = 0;

let text = 'welcome webbrain';
text=text.repeat(5);

function weSanagich(text){
    var index = parseInt(text.indexOf("we")); 
    weCount++;
    text=text.slice(index+2);
    text.includes('we') && weSanagich(text);
}
weSanagich(text);

function a_Sanagich(text){
    var index = parseInt(text.indexOf("a")); 
    aCount++;
    text=text.slice(index+1);
    text.includes('a') && a_Sanagich(text);
}
a_Sanagich(text);

function b_Sanagich(text){
    var index = parseInt(text.indexOf("b")); 
    bCount++;
    text=text.slice(index+1);
    text.includes('b') && b_Sanagich(text);
}
b_Sanagich(text);

console.log(`we: ${weCount}ta 
a: ${aCount}ta
b: ${bCount}ta`);