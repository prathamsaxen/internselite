// Basic Structure of Program
// How it works?
// Hello World Program Program

#include <iostream>
using namespace std;

// int main(){
//     cout<<"Hello World!"; // Printing Syntax
//     return 1;
// }

// Variables and Data Types
// int main(){
//     int age;
//     age=16;
//     float height=6.0;
//     char initials='P';
//     bool isEngineer=true;
//     cout<<"Age => "<<age<<endl;
//     cout<<"Height => "<<height<<endl;
//     cout<<"Initials => "<<initials<<endl;
//     cout<<"isEngineer => "<<isEngineer<<endl;
//     return 0;
// }


// Input and Output
// int main(){
//     int age;
//     cin>>age; // Input 
//     cout<<age; // Output
//     return 0;
// }

// Comment
// The particular code snippet which will be ignored by compiler and just for better dev experience.

// Operators
// = - * / %
// Assignemetn Opertor
// Comparison Operator == > < !=
//  Logical Operator && || !
// Increamenet ++ Decrements --

// int main(){

//     // Arithmatic Operators
//     cout<<2+2<<endl;
//     cout<<2-2<<endl;
//     cout<<2*2<<endl;
//     cout<<2/2<<endl;
//     cout<<3%2<<endl;

//     // Comparison Operator
//     cout<<(2==2)<<endl;
//     cout<<(2==3)<<endl;
//     cout<<(2!=2)<<endl;
//     cout<<(2!=3)<<endl;

//     return 1;
// }

// Conditional Statements
// If else
// int main(){
//     int age=19;
//     if(age>=18)
//     {
//         cout<<"Yeah You can drive";
//     }
//     else{
//         cout<<"Can't drive";
//     }
//     return 1;
// }

// int main(){
//     // for(int index=0;index<10;index++)
//     // {
//     //     cout<<index<<endl;
//     // }
//     // int index=0;
//     // while(index<10)
//     // {
//     //     cout<<index<<endl;
//     //     index++;
//     // }
//     // return 0;
//     int index=0;
//     do{
//         cout<<index<<endl;
//         index++;
//     }while(index<10);
// }
int calculate(int a, int b)
{
    return a-b;
}

int main(){
    cout<<calculate(2,5)<<endl;
    cout<<calculate(10,12)<<endl;

return 0;
}

