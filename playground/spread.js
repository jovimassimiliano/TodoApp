var person = ["Andrew",25];
var personTwo = ["jen",29];

function print(name,age){
  return "Hi"+name+", " + "you are" + age;
}
console.log(print(...person));

var name = ["anda","addi"];
var final = ["andu",...name];

for(var i = 0; i < final.length; i++){
  console.log("Hi" + final[i]);
}
