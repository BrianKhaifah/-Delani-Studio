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