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
  
    
    var a = /^\d{10}$/
    if(phone.value == ""){
        document.getElementById('name2').innerHTML= "This field is required";
 
    }
    else if(!a.test(phone.value)){
        document.getElementById('name2').innerHTML= "Invalid format.";

    }
    else if(phone.value != ""){
        document.getElementById('name2').innerHTML= "";
        
      
    }
    if(gender.value == ""){
        document.getElementById('name3').innerHTML= "This field is required";
        
    }
    if(gender.value != ""){
        document.getElementById('name3').innerHTML= "";
        
    }
    var pattern =/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if(email.value == ''){
        document.getElementById('name4').innerHTML= "This field is required";
        
    }
    else if(!pattern.test(email.value)){
        document.getElementById('name4').innerHTML= "Please enter a valid email address.";
        
    }else{
        document.getElementById('name4').innerHTML= "";
        
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
    if(aboutAs.value != ''){
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
    if(!faqs.checked){
        document.getElementById('name14').innerHTML= "This field is required";
        
    }
    if(faqs.value == '' || spsnews.value == '' || workHard.value == '' || joinSps.value == ''|| aboutAs.value == '' || graduateYear.value == '' || collage.value == '' || employee.value == ''|| qualification.value == ''|| place.value == ''||  names.value == "" || email.value == '' || gender.value == "" || phone.value == ""  ){
        return false;

    }
    else{
        return true;
     
    }

}
//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

