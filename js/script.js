$(document).ready(function(){
    // $("#design").click(function(){
    //     $("design-p").toggle();
    // });

    // $("#dev").click(function(){
    //     $("dev-p").toggle();
    // });


    // $("#product").click(function(){
    //     $("product-p").toggle();
    // });

    // $("p").css("text-align","center")

    $(".main").click(function(){
        $(this).children("#design-p").slideToggle(1500);
        $(this).children("#design").toggle();
    });

   

});