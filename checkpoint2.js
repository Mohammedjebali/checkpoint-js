//string manipulation function:

// Write a function that reverses a given string.
function reverse(str){
    var arr=str.split("")
    arr=arr.reverse()
    return arr.join("")
    }
    // Create a function that counts the number of characters in a string.
    function countchar(str,c){
        var count =0
        for(let i=0;i<str.length;i++){
            if (str[i]===c){
                count++

            }
        }
        return count
    }
    //Implement a function that capitalizes the first letter of each word in a sentence
function capitalizedwords(str){
    var arr=str.split("")
    for (let i = 0; i < arr.length; i++) {
        arr[i][0]=arr[i][0].toUpperCase()+ arr[i].slice(1)
       
        
    }
    return arr.join(" ")
}
// Array Functions:

// Write functions to find the maximum and minimum values in an array of numbers.
function max(arr){
    res=arr[0]
    for (let i = 0; i < arr.length; i++) {
        if (res<arr[i]){
            res=arr[i]
        }
        
    }
    return res
}
function max(arr){
    res=arr[0]
    for (let i = 0; i < arr.length; i++) {
        if (res>arr[i]){
            res=arr[i]
        }
        
    }
    return res
}

// Create a function that calculates the sum of all elements in an array.

function sum(arr) {
    var res = 0;
    for (let i = 0; i < arr.length; i++) {
        res += arr[i];
    }
    return res
}
// Implement a function that filters out elements from an array based on a given condition.
function filterodd(arr){
    var res=[]
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]%2===0) {
            res.push(arr[i])
            
        }
        
        
    }
    return res

}

// Mathematical Functions:

//  Write a function to calculate the factorial of a given number.

function factorial(n){
    var res=1
    var i=1
while(i<=n){
    res*=i
    i++
}
res*i
}

// Create a function to check if a number is prime or not.
function primenumber(n){
    var count=0
    var i=2
    while(i<=n){
        if(n%i==0){
            count++
        }
        i++
    }
    return count<=2
}
// Implement a function to generate the Fibonacci sequence up to a given number of terms.

function Fibonacci(n){
    var a=1
    var b=1
    var res =0
    var i=2
    while (i<=n){
        res=a+b
        a=b
        b=res
        i++
    }
    return res
}