document.getElementById('output').style.visibility = 'hidden';

document.getElementById('weightInput').addEventListener('input',convert);
function convert(e){
    document.getElementById('output').style.visibility = 'visible';
    var input = document.getElementById("inputType").value;
    let num = e.target.value;
    switch(input){
        case "kilograms":
            document.getElementById('first').innerHTML = "Grams: ";
            document.getElementById('firstOutput').innerHTML = num*1000;
            document.getElementById('second').innerHTML = "Pounds: ";
            document.getElementById('secondOutput').innerHTML = num*2.20462;
            document.getElementById('third').innerHTML = "Ounces: ";
            document.getElementById('thirdOutput').innerHTML = num*35.274;
            break;
        
        case "pounds":
            document.getElementById('first').innerHTML = "Kilograms: ";
            document.getElementById('firstOutput').innerHTML = num/2.20462;
            document.getElementById('second').innerHTML = "Grams: ";
            document.getElementById('secondOutput').innerHTML = num*453,592;
            document.getElementById('third').innerHTML = "Ounces: ";
            document.getElementById('thirdOutput').innerHTML = num*16;
            break;
        
        case "grams":
            document.getElementById('first').innerHTML = "Kilograms: ";
            document.getElementById('firstOutput').innerHTML = num/1000;
            document.getElementById('second').innerHTML = "Pounds: ";
            document.getElementById('secondOutput').innerHTML = num*0.00220462;
            document.getElementById('third').innerHTML = "Ounces: ";
            document.getElementById('thirdOutput').innerHTML = num*0.035274;
            break;

        case "ounces":
            document.getElementById('first').innerHTML = "Kilograms: ";
            document.getElementById('firstOutput').innerHTML = num/35.274;
            document.getElementById('second').innerHTML = "Grams: ";
            document.getElementById('secondOutput').innerHTML = num*28.3495;
            document.getElementById('third').innerHTML = "Pounds: ";
            document.getElementById('thirdOutput').innerHTML = num/16;
            break;
    }
    
    
}
