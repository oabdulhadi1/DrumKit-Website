// document.querySelector("button").addEventListener("click", function() 
// {
    
// });

var numberOfItems = document.querySelectorAll('.drum').length;


for (i=0; i<=numberOfItems; i++)
{

    document.querySelectorAll("button")[i].addEventListener("click", eventListener);
}

function eventListener()
{
    alert("I got clicked");
}



function add(num1, num2)
{
    return num1+num2;
}

function mult(num1,num2)
{
    return num1*num2;
}

function divide(num1,num2)
{
    return num1/num2;
}

function subtract(num1,num2)
{
    return num1-num2;
}

function calculator(num1, num2, operator)
{
    return operator(num1,num2);
}

