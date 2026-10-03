const marks=prompt("Enter marks:")
const attendence= prompt("Enter Attendence:")
const project_submitted =prompt("Is project Submitted?")

if(marks>=60 && attendence>=75 && project_submitted=="True"){
    console.log("Eligible for Certificate")
}
else if(marks>=60 && attendence>=75 && project_submitted=="False"){
     console.log("Needs Aproval")
}
else{
    console.log("Not Eligible for Certificate")
}