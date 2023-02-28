function validate(){
    var username=document.getElementsById("username").value;
    var password=document.getElementById("password").value;
    if(username=="admin"&& password=="user"){
        alert("Login Succesfully");
        return false;
    }
    else
    {
        alert("Login failed");
    }
}