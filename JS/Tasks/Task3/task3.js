//Created the form with input fields and submit btn

//For validation:

var form=document.getElementById("form");

form.addEventListener('submit', function(){
    var name =document.getElementsByName('name')[0].value;
    var age =document.getElementsByName('age')[0].value;
    var email =document.getElementsByName('email')[0].value;

    var isValid = true;
    if(name!='Chetna')
    {
        isValid=false;
    }
    if(age!=21)
    {
        isValid=false;
    }
    if(email!='chetna.soni@dianapps.com')
    {
        isValid=false;
    }

    if(!isValid)
    {
        alert("Invalid data !!");
    }else{
        alert("Form Submitted Successfully 🧌 !!")
    }
    form.reset();
}
);