const student={ name:"Ankita",
                age:70,
                Course:"Mern Stack",
                Skills:["html","css"],
                address:{
                    city:"Govindpur",
                    pin:831015
                }

}
//destructuring
// const names=student.name
// const Age=student.age

 const {name,age:Myage,Skills,address}=student
 console.log(name,Myage)