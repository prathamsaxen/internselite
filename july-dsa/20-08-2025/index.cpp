// Basics of Arrays and Strings 
#include<iostream>
#include<string>
using namespace std;

// class Car{
//     public:
//     string name;
//     int price;

//     Car(string data,int range)
//     {
//         name=data;
//         price=range;
//         cout<<"Constructor Called"<<endl;
//     }
// };

int main(){
    // Whatever the data you will be storing in a array that will be a kind of continuos memory allocation.
    // A - A B C - 1 2 3;
    // B - D E F - 1 2 3;
    // Array - [0 , 1 , 2];


    // Declaration
    int names[10];
    int age[5]={5,6,7,8,9};
    int data[]={1,5,7,8};
    // cout<<age[1]<<endl;
    // index++ => index=index+1
    for(int index=0;index<5;index++){
        cout<<age[index]<<endl;
    }

    string name = "Pratham Saxena";
    cout<<"Here is the Name => "<<name<<endl;
    cout<<"Length of the String => "<<name.length()<<endl;
    cout<<"Print the second Index of String => "<<name[2]<<endl;
    name="Er. "+name;
    cout<<"Update Name => "<<name<<endl;
    cout<<"Find Saxena in the String => "<<name.find("Saxena")<<endl;
    cout<<"Check Substring from 0 - 12 => "<<name.substr(0,12);
    // P - I
    // 1 - 0
    // 2 - 1
    // 3 - 2
    // 4 - 3
    // 5 - 4
    // 6 - 5
    // 7 - 6
    // 8 - 7
    // 9 - 8
    // 10 - 9
    // Address=(baseAdress+(sizeOfEachElement*Index))

    // OOPs - Object Oriented Programming Structure.
    //1. Encapsulation
    //2. Abstratction
    //3. Inheritance
    //4. Ploymorphism


    // Class 
    // Object

    // Car Swift;
    cout<<'\n'<<endl;
    // // Swift.name="Swift";
    // // Swift.price=100000;
    // cout<<Swift.name<<endl;
    // cout<<Swift.price<<endl;
    int content=10;
    cout<<&content<<endl; // Extracted the address
    int *location=&content; // Location is a pointer which takes input of memory address
    cout<<*location<<endl;
    // While Declaring any variable you store it at some lcoation in memeory
    // To store the memory address in any variable that is called pointer
    return 0;
}