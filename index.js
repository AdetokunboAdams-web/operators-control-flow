// No 3
if (subject === "English" && "Mathematics") {
    console.log("It is a general subject")
} else if (subject === "Government" && "Economics") {
    console.log("It is an arts subject")
}else if(subject === "Literature" && "History"){
    console.log("It is an art subject")
}else{
    console.log("Subject are not for arts student")
}

// No 4
for (let i = 1; i <20; i+=7) {
    console.log(i);
    //the output is 1, 8, 15
}
// No 5

function powerFinder(num) {
    let power =Math.round(Math.log2(num))
    return Math.pow(2, power);
}
var pwr = powerFinder(10);
console.log(`The number ${pwr} is the power of 2 nearest to the ${num}`)