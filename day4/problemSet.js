// return power of ints passed into function

function power(num1, num2) { // 4, 2
    if (num2 === 0) return 1;
    return num1 * power(num1, num2 - 1) // 
}


function factorial(num) { // 3
    if (num === 0) return 1;
    return num * factorial(num -1); 

}

function productOfArray(arr) {
    if (arr.length === 0) return 1;
    return arr[0] * productOfArray(arr.splice(1));
}

function recursiveRange(num) { // 6
    if (num === 0) return 0;
    return num + recursiveRange(num - 1); 
}

// accepts number and returns nth number in fib seq
// 4 -> 1, 1, 2, 3 
function fib(num) { // 4
    if (num === 2) return 1;
    return fib(n - 1) + fib(n - 2); 

}

function reverse(str) { // hello
    // return reverse of str
    if (str.length === 0) return '';
    return str[str.length - 1] + reverse(str.substr(0, str.length - 1)) // o + e + l + l
}

function isPalindrome(str) {
    // take the string
    // split in half
    // make it smaller and smaller on both sides
    // compare each recursively 
}