function isEven(n){
    if(n % 2 == 0) return true;
    else return false;
}
function isOdd(n){
    if(n % 2 != 0) return true;
    else return false;
}

function isVowel(ch)
{
    if(ch == 'a' || ch == 'e' || ch == 'i' || ch == 'o' || ch == 'u' || ch == 'A' || ch == 'E' || ch == 'I' || ch == 'O' || ch == 'U')
    {
        return true;
    }
    else{
        return false;
    }
}
function add(a, b){
    return a+b;
}
function sub(a,b)
{
    return a-b;
}
function multiply(a, b)
{
    return a*b;
}
function divide(a, b)
{
    return a/b;
}
function moduleValue(a, b)
{
    return a%b;
}

module.exports = {isEven, isOdd, isVowel, add, sub, multiply, divide, moduleValue}; 