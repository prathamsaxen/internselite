// 1 . For Loop
// 2 . While Loop
// 3. Do while Loop


#include <iostream>
using namespace std;

int main() {
    
    for(int i = 0; i < 10; i++) {
        cout << i << endl;
    }


    cout<<"ANother Loop Explaination!!"<<endl;

    int index=0;
    while(index<=10){
        cout<<index<<endl;
        index++;
    }

    cout<<"Do while Loop Explaination!!"<<endl;


    int index2 = 0;
   
    do{
        cout<<index2<<endl;
        index2++;
    }while(index2<5);


    for(int i=0; i<5; i++){
       for(int j=0; j<5; j++){
        cout<<"I = "<<i<<" J = "<<j<<endl;
       }
       cout<<endl;
    }

    for(int i = 0;i<7;i++){

        cout<<"I = "<<i<<endl;
        
       if(i == 5){
        cout<<"Breaking loop here..."<<endl;
        break;
       }

       if(i == 2){
        cout<<"Skipping iteration here..."<<endl;
        continue;
       }
       cout<<"I = "<<i<<endl;

    }


    int n=5;
    for(int i=1;i<=n;i++){
        for(int j=1;j<=i;j++){
            cout<<"* ";
        }
        cout<<endl;
    }

    // Number Pattern 
    for(int i=1;i<=n;i++){
        for(int j=1;j<=i;j++){
            cout<<j<<" ";
        }
        cout<<endl;
    }

    for(int i=0;i<=n;i++){
        for(int j=1;j<=i;j++){
        cout<<char(65+i)<<" ";
        // ASCII Values -> Task
        }
    cout<<endl;}

    // Factorial 5 ! = 5 * 4 * 3 * 2 * 1 = 120
    int factorial = 1;
    for(int i=1;i<=n;i++){
        factorial = factorial * i;
    }
    cout<<"Factorial of "<<n<<" is "<<factorial<<endl;

    // Time Complexity of the code is O(n^2)

    // Fibonacci Serioes

    int a = 0, b = 1;
    for(int i=1;i<=n;i++){
        cout<<a<<" ";
        int next = a + b;
        a = b;
        b = next;
    }
    cout<<endl;

    int number = 12345;

    int total = 0;
    int reverse = 0;

    int temp = number;
    while(temp > 0){
        int lastDigit = temp % 10;
        total = total + lastDigit;
        reverse = reverse * 10 + lastDigit;
        temp = temp / 10;
    }
    cout<<"Total of digits is "<<total<<endl;
    cout<<"Reverse of the number is "<<reverse<<endl;

    return 0;


}


// Assignments Questions -
// 1. Print a pyramid pattern using n e umbers instead of starts
// 2. Write a program wit check a number is prime or not
// 3. Write a program to print all the prime numbers between 1 and 100
