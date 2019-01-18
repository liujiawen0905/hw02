document.getElementById('0').addEventListener("click",function(){digits(0)})
document.getElementById('1').addEventListener("click",function(){digits(1)})
document.getElementById('2').addEventListener("click",function(){digits(2)})
document.getElementById('3').addEventListener("click",function(){digits(3)})
document.getElementById('4').addEventListener("click",function(){digits(4)})
document.getElementById('5').addEventListener("click",function(){digits(5)})
document.getElementById('6').addEventListener("click",function(){digits(6)})
document.getElementById('7').addEventListener("click",function(){digits(7)})
document.getElementById('8').addEventListener("click",function(){digits(8)})
document.getElementById('9').addEventListener("click",function(){digits(9)})
document.getElementById('+/=').addEventListener("click",function(){arithmetic('+/=')})
document.getElementById('-').addEventListener("click",function(){arithmetic('-')})
document.getElementById('*').addEventListener("click",function(){arithmetic('*')})
document.getElementById('/').addEventListener("click",function(){arithmetic('/')})
document.getElementById('C').addEventListener("click", function(){clear()})
document.getElementById('.').addEventListener("click", function(){decimal()})


var first_input = "";
var sec_input = "";
var operator = "";
var screen_num = document.getElementById("screen");

function digits(input){
  if(sec_input == ""){
    sec_input = input;
    screen_num.innerHTML = sec_input;
  }
  else {
    sec_input = screen_num.innerHTML + input;
    screen_num.innerHTML = sec_input;
  }
}

function clear(){
  if(sec_input == "") {
    first_input = "";
    operation = "";
  } else {
    sec_input = "";
  }
  screen_num.innerHTML = 0;
}


function arithmetic(op){
  if(first_input == ""){
    first_input = sec_input;
    sec_input = "";
  }
  else if(sec_input != "") {
    switch (operator) {
      case "+/=":
      var temp = parseFloat(first_input) + parseFloat(sec_input);
      screen_num.innerHTML = temp;
      first_input = temp;
      sec_input = "";
      break;

      case "-":
      var temp = parseFloat(first_input) - parseFloat(sec_input);
      screen_num.innerHTML = temp;
      first_input = temp;
      sec_input = "";
      break;

      case "*":
      var temp = parseFloat(first_input) * parseFloat(sec_input)
      screen_num.innerHTML = temp;
      first_input = temp;
      sec_input = "";
      break;

      case "/":
      var temp = parseFloat(first_input) / parseFloat(sec_input)
      screen_num.innerHTML = temp;
      first_input = temp;
      sec_input = "";
      break;
      default:
    }
  }
  operator = op;
}

function decimal() {
  if (screen_num.innerHTML.indexOf(".") < 0 && sec_input !== ""){
    screen_num.innerHTML = screen_num.innerHTML + ".";
    sec_input ="0."
  }
}

