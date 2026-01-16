let motorBike = {
    model: 2017,
    company: "Honda",
    color: "Black and red"
};

console.log(motorBike);
console.log(typeof motorBike);


let user = {
    name: "Iqra haji",
    age: 20,
    city: "Lahore"
};

console.log(user);
console.log(typeof user);

//parsing and converting

// Obj to String
var convertedStringFromObj = JSON.stringify(motorBike);
console.log(motorBike);

// String to Obj
var convertedOBJFromString = JSON.parse(convertedStringFromObj);
console.log(user);