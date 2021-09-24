// AOS.init();
var names = document.getElementById('name');
var email = document.getElementById('email');
var place = document.getElementById('place');
let phone = document.getElementById('phone');
let gender = document.getElementById('gender');
let employee = document.getElementById('employee');
let qualification =document.getElementById('qualification');
let collage = document.getElementById('collage');
let graduateYear = document.getElementById('graduateYear');
let aboutAs  = document.getElementById('aboutAs');
let joinSps = document.getElementById("joinSps");
let workHard = document.getElementById('workHard');
let spsnews = document.getElementById('spsnews');
let faqs = document.getElementById('faqs');
let form = document.getElementById("form");
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;



function validatform(){
    if(names.value.length <= 5){

        document.getElementById('name1').innerHTML= "Please enter at least 5 characters.";
       
    }
    if(names.value != ""){
        document.getElementById('name1').innerHTML= "";
       
    }
  
    if(names.value == ""){

        document.getElementById('name1').innerHTML= "This field is required";
     
        
    }
  
    
  
    if(phone.value == ""){
        document.getElementById('name2').innerHTML= "This field is required";
        
      
    }
    if(phone.value != ""){
        document.getElementById('name2').innerHTML= "";
        
      
    }
    if(gender.value == ""){
        document.getElementById('name3').innerHTML= "This field is required";
        
    }
    if(gender.value != ""){
        document.getElementById('name3').innerHTML= "";
        
    }
    if(email.value == ''){
        document.getElementById('name4').innerHTML= "This field is required";
        
    }
    if(email.value != ''){
        document.getElementById('name4').innerHTML= "";
        
    }
    

    if(email.value.match(mailformat)){
        document.getElementById('name4').innerHTML= "Please enter a valid email address.";
        
    }
    
    if(place.value == ''){
        document.getElementById('name5').innerHTML= "This field is required";
        
    }
    if(place.value != ''){
        document.getElementById('name5').innerHTML= "";
        
    }
    if(employee.value == ''){
        document.getElementById('name6').innerHTML= "This field is required";
        
    }
    if(employee.value != ''){
        document.getElementById('name6').innerHTML= "";
        
    }

    if(qualification.value == ''){
        document.getElementById('name7').innerHTML= "This field is required";
       
    }
    if(qualification.value != ''){
        document.getElementById('name7').innerHTML= "";
       
    }

    if(collage.value == ''){
        document.getElementById('name8').innerHTML= "This field is required";
       
    }
    if(collage.value != ''){
        document.getElementById('name8').innerHTML= "";
       
    }
    if(graduateYear.value == ''){
        document.getElementById('name9').innerHTML= "This field is required";
       
    }
    if(graduateYear.value != ''){
        document.getElementById('name9').innerHTML= "";
       
    }

    if(aboutAs.value == ''){
        document.getElementById('name10').innerHTML= "This field is required";
       
    }
    if(aboutAs.value == ''){
        document.getElementById('name10').innerHTML= "";
       
    }
    if(joinSps.value == ''){
        document.getElementById('name11').innerHTML= "This field is required";
        
    }
    if(joinSps.value != ''){
        document.getElementById('name11').innerHTML= "";
        
    }
    
    if(workHard.value == ''){
        document.getElementById('name12').innerHTML= "This field is required";
       
    }
    if(workHard.value != ''){
        document.getElementById('name12').innerHTML= "";
       
    }


    if(spsnews.value == ''){
        document.getElementById('name13').innerHTML= "This field is required";
       
    }
    if(spsnews.value != ''){
        document.getElementById('name13').innerHTML= "";
       
    }
    if(faqs.value == ''){
        document.getElementById('name14').innerHTML= "This field is required";
        
    }
    if(faqs.value == '' || spsnews.value == '' || workHard.value == '' || joinSps.value == ''|| aboutAs.value == '' || graduateYear.value == '' || collage.value == '' || employee.value == ''|| qualification.value == ''|| place.value == ''||  names.value == "" || email.value == '' || gender.value == "" || phone.value == ""  ){
        return false;

    }
    else{
        return true;
     
    }

}

