// #include <iostream>
// using namespace std;

// // class Person{
// //     public:
// //     string name;

// //     void introduce(){
// //         cout << "Hello, my name is " << name << endl;
// //     }
// // };

// // class Student : public Person{
// //     public:
// //     int rollNumber;
// //     void displayStudent(){
// //         introduce();
// //         cout << "My roll number is " << rollNumber << endl;
// //     }
// // };

// // class Animal{
// //     public:
// //     void eat(){
// //         cout << "I am eating" << endl;
// //     }
// // };

// // class Dog : public Animal{
// //     public:
// //     void bark(){
// //         cout << "I am barking" << endl;
// //     }
// // };

// // class Person{
// //     public:
// //     void introduce(){
// //       cout<<"I am a person"<<endl;
// //     }
// // };

// // class Employee : public Person{
// //     public:
// //     void work(){
// //         cout<<"I am working"<<endl;
// //     }
// // };

// // class Manager : public Employee{
// //     public:
// //     void manage(){
// //         cout<<"I am managing"<<endl;
// //     }
// // };


// // class Camera {
// //     public:
// //     void takePhoto(){
// //         cout<<"Taking photo"<<endl;
// //     }
// // };

// // class Phone{
// //     public:
// //     void makeCall(){
// //         cout<<"Making call"<<endl;
// //     }
// // };

// // class SmartPhone : public Camera, public Phone{
// //     public:
// //     void takePhotoAndMakeCall(){
// //         takePhoto();
// //         makeCall();
// //     }
// // };

// // class Base {
// //     public:
// //     int publicValue = 20;

// //     protected:
// //     int protectedValue = 30;

// //     private:
// //     int privateValue = 40;
// // };

// // class Derived : public Base{
// //     public:
// //     void displayValues(){
// //         cout<<"Public value: " << publicValue << endl;
// //         cout<<"Protected value: " << protectedValue << endl;
// //         // cout<<"Private value: " << privateValue << endl;
// //     }
// // };

// class Employee{
//     public:
//     virtual void work(){
//         cout<<"I am working"<<endl;
//     }

//     virtual ~Employee(){
//         cout<<"Employee destructor"<<endl;
//     }
// };

// class Manager : public Employee{
//     public:
//     void work(){
//         cout<<"I am managing"<<endl;
//     }
// };
// int main() {
   
//     // Student s1;
//     // s1.name = "John";
//     // s1.rollNumber = 123;
//     // s1.displayStudent();

//     // Dog d1;
//     // d1.eat();
//     // d1.bark();


//     // Manager m1;
//     // m1.introduce();
//     // m1.work();
//     // m1.manage();

//     // SmartPhone s1;
//     // s1.takePhotoAndMakeCall();

//     // Derived d1;
//     // d1.displayValues();

//     Employee e1;
//     Manager m1;

//     m1.work(); 
//     e1.work();
//     return 0;
// }


#include<iostream>

#include<vector>
using namespace std;

int main(){
    vector<int> marks = {85,90,78};
    marks.push_back(80);
    for(int mark : marks){
        cout<<mark<<" ";
    }

    cout<<endl;

    cout<<"First Element: "<<marks.front()<<endl;
    cout<<"Last Element: "<<marks.back()<<endl;

    cout<<"Current Size of Vector: "<<marks.size()<<endl;
   
    marks.pop_back();
    for(int mark : marks){
        cout<<mark<<" ";
    }
    cout<<endl;

    cout<<"Current Size of Vector: "<<marks.size()<<endl;
   

    sort(marks.begin(), marks.end());
    for(int mark : marks){
        cout<<mark<<" ";
    }
    cout<<endl;

    cout<<"Sorted Vector: "<<endl;
    for(int mark : marks){
        cout<<mark<<" ";
    }
    cout<<endl;
    
    
    return 0;
}

// Assignment Questions -
// 1. Create a vector of strings and add 5 strings to it.
// 2. Create a vector of integers and add 5 integers to it.
// 3. Create a vector of doubles and add 5 doubles to it.
// 4. Create a vector of characters and add 5 characters to it.
// 5. Create a vector of booleans and add 5 booleans to it.
// 6. Create a vector of vectors of integers and add 5 vectors of integers to it.
// 7. Create a vector of vectors of strings and add 5 vectors of strings to it.
// 8. Create a vector of vectors of doubles and add 5 vectors of doubles to it.
// 9. Create a vector of vectors of characters and add 5 vectors of characters to it.
// 10. Create a vector of vectors of booleans and add 5 vectors of booleans to it.

// OOps based assignments -
// 1. Create a class Person with a name and age attribute.
// 2. Create a class Student that inherits from Person and has a roll number attribute.
// 3. Create a class Teacher that inherits from Person and has a salary attribute.
// 4. Create a class Principal that inherits from Teacher and has a school name attribute.
// 5. Create a class Student that inherits from Person and has a roll number attribute.
// 6. Create a class Teacher that inherits from Person and has a salary attribute.
// 7. Create a class Principal that inherits from Teacher and has a school name attribute.
// 8. Create a class Student that inherits from Person and has a roll number attribute.
// 9. Create a class Teacher that inherits from Person and has a salary attribute.
// 10. Create a class Principal that inherits from Teacher and has a school name attribute.

// Inheritance based assignments -
// 1. Create a class Employee with a name and salary attribute.
// 2. Create a class Manager that inherits from Employee and has a department attribute.
// 3. Create a class Director that inherits from Manager and has a company name attribute.
// 4. Create a class Employee that inherits from Person and has a salary attribute.
// 5. Create a class Manager that inherits from Employee and has a department attribute.
// 6. Create a class Director that inherits from Manager and has a company name attribute.
// 7. Create a class Employee that inherits from Person and has a salary attribute.
// 8. Create a class Manager that inherits from Employee and has a department attribute.
// 9. Create a class Director that inherits from Manager and has a company name attribute.
// 10. Create a class Employee that inherits from Person and has a salary attribute.