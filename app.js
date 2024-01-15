

var emailInput ;
var submit = document.querySelector(".li5");

var validation = function (){
    emailInput = document.querySelector("#emailInput").value;

    var upperlower = /^[A-Z , a-z]/.test (emailInput); // important line to check email start with upper cass or not
    var spacecheck = /[ ]/.test(emailInput);
    var onlycharAllowed = /[^A-Z,a-z,0-9,@,.]/.test(emailInput);
    var AttheRate = /[@]/.test(emailInput);
    var dotcom    =  /[.][cC][oO][mM]/.test(emailInput); 
    var emaillen = emailInput.length;


    if(emailInput.trim() !== ""){

        console.log("hi");
    } else {
        console.log("error");
        document.querySelector(".alertmsg").innerHTML = "* Please enter Email id " ;
        return false;
    }


    if(upperlower){
        document.querySelector(".alertmsg").innerHTML ="";
    }else{
        document.querySelector(".alertmsg").innerHTML ="* Start with upper case or Lower case";
        return false;

    }

    if(spacecheck){

        document.querySelector(".alertmsg").innerHTML ="* Spaces are not allowed";
        return false;

    }else{
        document.querySelector(".alertmsg").innerHTML ="";
    }

    if(onlycharAllowed){
        document.querySelector(".alertmsg").innerHTML ="* Only alphabet , number , @,. is allowed";
   
        return false;
    }else{
        document.querySelector(".alertmsg").innerHTML ="";
       
    }
   
    if(AttheRate){
        document.querySelector(".alertmsg").innerHTML ="";
    }else{
        document.querySelector(".alertmsg").innerHTML ="* incorrect format , Use @";
        return false;
    }

    if(dotcom){

        document.querySelector(".alertmsg").innerHTML ="";
    }else{
        document.querySelector(".alertmsg").innerHTML ="* incorrect format , Use .com";
        return false;
    }

    if(emaillen >10 && emaillen < 40){
        document.querySelector(".alertmsg").innerHTML ="";
    }else{
        document.querySelector(".alertmsg").innerHTML ="* Email length must be rage between 10 to 30 characters";
        return false;
    }

    window.location.href = "/thanks.html";   // most important line  



}

submit.addEventListener("click" , validation)


// ---------------------------      validation Complete      --------------------------

