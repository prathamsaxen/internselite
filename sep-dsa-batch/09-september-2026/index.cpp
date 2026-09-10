// // // #include <iostream>
// // // using namespace std;

// // // // Arithmetic Operators -> + | - | * | / | %
// // // // Assignment Operators -> = | += | -= | *= | /= | %=
// // // // Comparison Operators -> == | != | > | < | >= | <=
// // // // Logical Operators -> && | || | !
// // // // Bitwise Operators -> & | | | ^ | ~ | << | >>
// // // // Ternary Operator -> ? :
// // // // Increment and Decrement Operators -> ++ | --
// // // // Sizeof Operator -> sizeof()
// // // // Type Casting Operators -> (type)expression


// // // // Decision Statements | Controlled Statements 


// // // int main() {
// // //     // cout << "Hello, World!" << endl;

// // //     // cout<< (5%3 )<<endl;
// // //     // cout<< (5 == 5) <<endl;
// // //     // cout<< (5 != 5) <<endl;
// // //     // cout<< (5 > 5) <<endl;
// // //     // cout<< (5 < 5) <<endl;
// // //     // cout<< (5 >= 5) <<endl;
// // //     // cout<< (5 <= 5) <<endl;

// // //     // int age;
// // //     // bool hasLicense;

// // //     // cout<<"Enter your age: ";
// // //     // cin>>age;

    

// // //     // string result = (age>=18) ? "You are an adult" : "You are not an adult";
// // //     // cout<<result<<endl;
// // //     // if(age>=18){

// // //     //     cout<<"Do you have a license? (1 for yes, 0 for no): ";
// // //     // cin>>hasLicense;

    
// // //     //     if(hasLicense == 1){
// // //     //         cout<<"You can drive the car"<<endl;
// // //     //     }
// // //     //     else{
// // //     //         cout<<"You can't drive the car"<<endl;
// // //     //     }
// // //     // }
// // //     // else{
// // //     //     cout<<"You are not an adult yet you can't drive the car"<<endl;
// // //     // }

// // //     // cout<<"Do you have a license? (1 for yes, 0 for no): ";
// // //     // cin>>hasLicense;

// // //     // if(age>18 && hasLicense)
// // //     // {
// // //     //     cout<<"You can drive the car"<<endl;
// // //     // }
// // //     // else{
// // //     //     cout<<"You can't drive the car"<<endl;
// // //     // }

// // //     // if(age >= 18) {
// // //     //     cout<<"You are an adult"<<endl;
// // //     // }
// // //     // else if(age >= 13 && age <= 17)
// // //     // {
// // //     //     cout<<"You are a teenager"<<endl;
// // //     // }
// // //     // else if(age >= 3 && age <= 12)
// // //     // {
// // //     //     cout<<"You are a child"<<endl;
// // //     // }
// // //     // else if(age >= 0 && age <= 2)
// // //     // {
// // //     //     cout<<"You are a baby"<<endl;
// // //     // } else {
// // //     //     cout<<"You are not an adult"<<endl;
// // //     // }

// // //     // if(age > 18) {
// // //     //     cout<<"Yeah You can drive the car"<<endl;
// // //     // }
// // //     // else if(age == 18)
// // //     // {
// // //     //     cout<<"You are an adult now you can learn to drive the car"<<endl;
// // //     // }
// // //     // else{
// // //     //     cout<<"You are not an adult yet you can't drive the car"<<endl;
// // //     // }

// // //     // int choiceNumber;
// // //     // cout<<"Enter your choice number: ";
// // //     // cin>>choiceNumber;

// // //     // switch(choiceNumber)
// // //     // {
// // //     //     case 1:
// // //     //         cout<<"You chose 1"<<endl;
// // //     //         break;
// // //     //     case 2:
// // //     //         cout<<"You chose 2"<<endl;
// // //     //         break;
// // //     //     case 3:
// // //     //         cout<<"You chose 3"<<endl;
// // //     //         break;
// // //     //     default:
// // //     //         cout<<"You chose an invalid number"<<endl;
// // //     // }

// // //     int operand;
// // //     cout<<"Enter your operand: ";
// // //     cin>>operand;

// // //     cout<<"Calculator Menu"<<endl;
// // //     cout<<"1. Addition"<<endl;
// // //     cout<<"2. Subtraction"<<endl;
// // //     cout<<"3. Multiplication"<<endl;
// // //     cout<<"4. Division"<<endl;
// // //     cout<<"5. Modulus"<<endl;
// // //     cout<<"Enter your choice: ";
// // //     cin>>choice;
    
// // //     switch(choice)
// // //     {
// // //         case 1:
// // // coit<<"Addition"<<endl;            break;
    
// // //     case 2:
// // //             cout<<"You chose 2"<<endl;
// // //             break;
// // //         case 3:
// // //             cout<<"You chose 3"<<endl;
// // //             break;
// // //         case 4:
// // //             cout<<"You chose 4"<<endl;
// // //             break;
// // //     }   
// // //     return 0;
// // // }

// // #include <iostream>
// // using namespace std;

// // int main()
// // {
// //     int choice;
// //     double a, b;

// //     cout << "Enter first number: ";
// //     cin >> a;

// //     cout << "Enter second number: ";
// //     cin >> b;

// //     cout << "\n===== MENU =====\n";
// //     cout << "1. Addition\n";
// //     cout << "2. Subtraction\n";
// //     cout << "3. Multiplication\n";
// //     cout << "4. Division\n";
// //     cout << "Enter your choice: ";

// //     cin >> choice;

// //     switch (choice)
// //     {
// //         case 1:
// //             cout << "Result = " << a + b;
// //             break;

// //         case 2:
// //             cout << "Result = " << a - b;
// //             break;

// //         case 3:
// //             cout << "Result = " << a * b;
// //             break;

// //         case 4:
// //             if (b != 0)
// //             {
// //                 cout << "Result = " << a / b;
// //             }
// //             else
// //             {
// //                 cout << "Cannot divide by zero.";
// //             }
// //             break;

// //         default:
// //             cout << "Invalid choice.";
// //     }

// //     return 0;
// // }

// #include <iostream>
// using namespace std;

// // Grade Calculator

// int main(){
//     int marks;

//     cout<<"Enter your marks: ";
//     cin>>marks;

//     if(marks >= 90 && marks <= 100)
//     {
//         cout<<"You got A grade"<<endl;
//     }
//     else if(marks >= 80 && marks <= 89)
//     {
//         cout<<"You got B grade"<<endl;
//     }
//     else if(marks >= 70 && marks <= 79)
//     {
//         cout<<"You got C grade"<<endl;
//     }
//     else if(marks >= 60 && marks <= 69)
//     {
//         cout<<"You got D grade"<<endl;
//     }
//     else if(marks >= 50 && marks <= 59)
//     {
//         cout<<"You got E grade"<<endl;
//     }
//     else if(marks < 0 || marks > 100)
//     {
//         cout<<"Invalid marks"<<endl;
//     }
//     else
//     {
//         cout<<"You got F grade"<<endl;
//     }
//     return 0;
// }

// Largest Amongs Three Numbers -
#include <iostream>
using namespace std;

int main()
{
    int num1, num2, num3;
    cout<<"Enter three numbers: ";
    cin>>num1>>num2>>num3;
    if(num1>num2 && num1>num3)
    {
        cout<<num1<<" is the largest number"<<endl;
    }
    else if(num2>num1 && num2>num3)
    {
        cout<<num2<<" is the largest number"<<endl;
    }
    else
    {
        cout<<num3<<" is the largest number"<<endl;
    }
    return 0;
}

// ATM SIMULATION
// HardCodede Balance
// 1. Check Balance
// 2. Deposit Money
// 3. Withdraw Money
// 4. Exit

#include <iostream>
using namespace std;

int main()
{
    int balance = 1000;
    int choice;
    cout<<"Enter your choice: ";
    cin>>choice;
}