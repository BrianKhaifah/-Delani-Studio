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
    $(".form").submit(function(){
        var name = document.getElementById("mce-NAME").value
        var email = document.getElementById("mce-EMAIL").value
        var message = document.getElementById("mce-MESSAGE").value
        if (name == "" || name == null){
            alert("Name can not be empty")
        }
        else if (email == "" || email == null){
            alert("Email can not be empty")
        }

        else if (message == "" || message == null){
            alert("message can not be empty")
        }
       else{
        alert (" We have received your message " + name + ". Thank you for reaching out to us")
       }
        

    })
    
});