      
$(".try").click(function()
{
    window.location.href = "http://127.0.0.1:5511/bmi.html";
});
function Calculate()
{
var h = $("#h-input").val();
                if (h === "") {
                    alert("height is Required");
                    $("#h-input").focus();
                    return "";
                }
var w = $("#w-input").val();
                if (w === "") {
                    alert("weigth is Required");
                    $("#w-input").focus();
                    return "";
                }          
    var height = document.getElementById("h-input").value;
    var weight = document.getElementById("w-input").value;


    var result = weight /(height*height);
    

    if(!isNaN(result)){
        document.getElementById("bmi-output").innerHTML = Math.round(result);
        if(result < 18.5){
            document.getElementById("bmi-status").innerHTML = "Underweight";
        }
        else if(result < 25){
            document.getElementById("bmi-status").innerHTML = "Healthy";
        }
        else if(result < 30){
            document.getElementById("bmi-status").innerHTML = "Overweight";
        }
        else
        {
            document.getElementById("bmi-status").innerHTML = "Obesity";
        }
    }
}