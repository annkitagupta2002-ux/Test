const students=['aniket','PRIYA','rohit','Neha']
const upperNames=[]
for(i=0;i<students.length;i++){
    upperNames.push(students[i].toUpperCase())
}
console.log(upperNames)
upperNames.push('AMAN')
console.log(upperNames)
upperNames.shift()
console.log(upperNames)
console.log(upperNames.includes("ROHIT"))

const str=upperNames.join(",")
console.log(str)