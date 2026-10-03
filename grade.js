const marks=prompt("Enter a number")
if(marks<0 || marks>100){
     console.log("Invalid")
}
else if(marks>=90 && marks<=100){
    console.log("Grade: A")
}
else if(marks>=75 && marks<=89){
    console.log("Grade: B")
}
else if(marks>=60 && marks<=74){
    console.log("Grade: C")
}
else if(marks>=40 && marks<=59){
    console.log("Grade: D")
}
else{
    console.log("FAIL")
}
