function validateform(){
    let x = document.forms["myform"]["femail"].value;
    if(x==''){
        alert("Email must be filled out");
        return false;
    }
    let y=document.forms["myform"]["fpass"].value;
    c=y.length
    if(c<8){
        alert("Password must be atleast 8 characters");
        return false;
    }
    else if(isNan(y)){
        alert("Password must contain atleast 1 numeric");
    }
}
function moveon(){
    document.getElementById("ssk").innerHTML="Didn't create an account?"
}
function moveout(){
    document.getElementById("ssk").innerHTML="For registering new account click below!"
}