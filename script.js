// AOS.init();
var names = document.getElementById('name').value;
let email = document.getElementById('email').value;
let place =document.getElementById('place').value;
let phone = document.getElementById('phone').value;
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
let form = document.getElementById("form");



function validatform(){
  
    if(names == ''){
        // alert("hhd");
        // names.focus()
        document.getElementById('name1').innerHTML= "This field is required";
        return false;
    }
    if(place == ''){
        document.getElementById('name5').innerHTML= "This field is requiredffffff";
        return false;

    }
    else{
        return true;
    }

}

