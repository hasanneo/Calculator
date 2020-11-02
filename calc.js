$(function () {
    // jQuery methods go here...
    let resultText="";
    $("#answer").text(resultText);
    $(".number").click(function(){
        resultText+=parseInt($(this).text(),10);
        $("#answer").text(resultText);
    });
    //clicked on plus
    $("#add").click(function () {
        resultText+="+";
        $("#answer").text(resultText);
    });
    //clicked on multiplication
    $("#mul").click(function () {
        resultText+="*";
        $("#answer").text(resultText);
    });
    //clicked on subtraction
    $("#sub").click(function () {
      resultText+="-";
        $("#answer").text(resultText);
    });
    $("#clear").click(function () {
        $("#answer").text("");
        resultText="";
    });
    //clicked on equals
    $("#eq").click(function () {
        $("#answer").text(eval(resultText));
        resultText=$("#answer").text();        
    });
});