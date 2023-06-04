function validate(){
    var username= document.getElementById("user").value;
    var password= document.getElementById("pass").value;
    if(username.value=="  "){
        alert("Empty field");
        }
        return false;
    }
    if(password.length < 8){
        document.write("Password must be 8 or greater than 8");
        return false;
    }
    else{
        return true;
    }
