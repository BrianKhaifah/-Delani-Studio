$(document).ready(function(){

    $(".main").click(function(){
        $(this).children("#design-p").slideToggle(1500);
        $(this).children("#design").toggle();
    });

    $(".rap").mouseover(function()
    {
        $(this).children(".name").show();
    })
    .mouseout(function(){
        $(this).children(".name").hide();
    })
    
});
function main(){
    var name = document.getElementById("mce-NAME").nodeValue;
    var name = document.getElementById("mce-EMAIL").nodeValue;
    var name = document.getElementById("mce-MESSAGE").nodeValue;
    var mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    var validateForm = function() {
        if (name =="" || email == "" || message == ""){
            alert("Please fill in the form");
        }
        else {
            return true;
        };
        if(email !== mailFormat){
            alert("Input the correct email")
        }
        else {
            return true;
        };
    }

    if (validateForm() === true ) {
        alert (" We have received your message " + name + ". Thank you for reaching out to us")

    }
    else {
        return false;
    };


};