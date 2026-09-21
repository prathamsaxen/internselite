// Functions.
// A function is a resuable block of code designed for a particular task. It can take inputs, perform operations, and return outputs. Functions help in organizing code, reducing redundancy, and improving readability.    
#include <iostream>
using namespace std;

// Function Declaration | 4. Parameter and Return Type
int add(int a, int b){
        cout<<"First Add Function Called"<<endl;

    return a + b;
} // This is a function declaration. It tells the compiler about the function's name, return type, and parameters.


int add(int a, int b, int c){
    cout<<"Second Add Function Called"<<endl;
    return a + b + c;
} // This is an overloaded version of the add function. It takes three parameters instead of two.


// 1. No Parameter and No Return Type
void greet(){
    cout<<"Hello, World!"<<endl;
} // This function does not take any parameters and does not return any value.


// 2. Parameter and No Return Type
void printSum(int a, int b){
    cout<<"The sum of "<<a<<" and "<<b<<" is: "<<(a + b)<<endl;
} // This function takes two parameters but does not return any value.

// 3. NO parameter and Return Type
int getRandomNumber(){
    return 42; // This function does not take any parameters but returns an integer value.
}


// Pass by Value
void change(int x){
    x = 100;
}

// Pass by Reference
void changeByReference(int &x){
    x = 100;
}

// Default Arguments
void displayMessage(string message = "Default Message"){
    cout<<message<<endl;   
}

int fibonacci(int n){
    if(n <= 1){
        return n; // Base case: fibonacci(0) = 0, fibonacci(1) = 1
    }
    return fibonacci(n - 1) + fibonacci(n - 2); // Recursive case: fibonacci(n) = fibonacci(n-1) + fibonacci(n-2)
}

// Recursion to factorial
int factorial(int n){
    if(n <= 1){
        return 1; // Base case: factorial of 0 or 1 is 1.
    }
    return n * factorial(n - 1); // Recursive case: n! = n * (n-1)!
}

// 3 * factorial (2)
// 2 * factorial (1)

int main(){
    cout<<"Functions Lecture"<<endl;
    cout<<"The sum of 5 and 10 is: "<<add(5, 10)<<endl;

    greet(); // Calling the function greet.
    printSum(5, 10); // Calling the function printSum    with arguments 5 and 10.
    cout<<getRandomNumber(); // Calling the function getRandomNumber. The returned value is not used here.

    int a = 10;
    change(a);
    changeByReference(a); // Calling the function changeByReference with the value of a. This will change the value of a in main.
    cout<<"\nThe value of a after calling change function: "<<a<<endl; //

    displayMessage(); // Calling the function displayMessage without any arguments. It will use the default argument.
    displayMessage("Hello, this is a custom message!"); // Calling the function displayMessage
   
   cout<<"The sum of 5, 10 and 15 is: "<<add(5, 10, 15)<<endl; // Calling the overloaded add function with three arguments.

   cout<<fibonacci(10)<<endl; // Calling the fibonacci function to get the 5th Fibonacci number.
    return 0;
}

// Function Terminology:
// 1. Function Name: The identifier used to call the function (e.g., add).
// 2. Return Type: The data type of the value that the function returns (e.g., int).
// 3. Parameters: The variables that accept values passed to the function ( 
// e.g., int a, int b). 
// Return Type Function Name (Parameters) { // Function Body }


// 1. No Paramter and No Return Type


// Pass by Value vs Pass by Reference:


// Function Overloading: Function overloading allows multiple functions to have the same name but different parameter lists. The compiler determines which function to call based on the arguments passed. This enhances code readability and usability.



// Task 1: Implement a function to calculate the power of a number (base^exponent) using recursion.