#include<iostream>
using namespace std;



// int add(int a,int b)
// {
//     // cout<<"A + B = "<< a+b<<endl;
//     return a+b;
// }

// void printName()
// {
//     cout<<"Pratham Saxena"<<endl;
// }

// Loops are the ways to reiterate you can say re run the logic which is present in the loop again and again till the desired number of iterates.

int main()
{
    // 1. Function??
//    cout<< add(3,4)<<endl;

//     add(55,45);
//     printName();

// cout<<"Pratham Saxena"<<endl;
// cout<<"Pratham Saxena"<<endl;
// cout<<"Pratham Saxena"<<endl;
// cout<<"Pratham Saxena"<<endl;
// cout<<"Pratham Saxena"<<endl;
// cout<<"Pratham Saxena"<<endl;
// cout<<"Pratham Saxena"<<endl;
// cout<<"Pratham Saxena"<<endl;
// cout<<"Pratham Saxena"<<endl;
// cout<<"Pratham Saxena"<<endl;

// 1. For | While | Do while
// for(int data=0;data<100;data=data+2)
// {
//     cout<<"Pratham Saxena - "<<data<<endl;
// }

int initialValue=0;
while(initialValue<=100)
{
    cout<<initialValue<<" ";
     initialValue++;
}

// Logic for Factorial
// 5! = 5 X 4 X 3 X 2 
cout<<endl;

int value = 8;
int Factorial=1;

while(value>1)
{
    Factorial=Factorial*value;
    value--;
}

cout<<"7! = "<<Factorial<<endl;

    return 0;
}