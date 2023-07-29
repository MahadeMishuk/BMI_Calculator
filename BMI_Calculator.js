function BMICalFunc() 
{
    var lb = document.getElementById("Weight").value;
    var cm = document.getElementById("Height").value;
    var result = lb / (cm * cm);

    document.getElementById("result").innerHTML = "BMI : " + result;
}

