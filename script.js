// AOS.init();

let names = document.getElementById("name");
let email = document.getElementById("email").value;
let place =document.getElementById("place").value;
let phone = document.getElementById("phone").value;
let gender = document.getElementById("gender").value;
let employee = document.getElementById("employee").value;
let qualification =document.getElementById("qualification").value;
let collage = document.getElementById("collage").value;
let graduateYear = document.getElementById("graduateYear").value;
let aboutAs  =document.getElementById("aboutAs").value;
let joinSps= document.getElementById("joinSps").value;
let workHard = document.getElementById("workHard").value;
let spsnews = document.getElementById("spsnews").value;
let faqs = document.getElementById("faqs").value;

function validate(){
    if(names.value == ""){
       document.getElementById("namef").innerHTML ="dhhgds"


       

        return false;
       
    
    }
    // else{
    //     return false
    // }
    console.log(names)
   

}


